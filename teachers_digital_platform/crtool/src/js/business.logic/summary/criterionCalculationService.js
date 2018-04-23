import C from "../constants";
import Repository from "../repository";
import UtilityService from "../utilityService";
import QualityCalculationService from "../summary/qualityCalculationService";
import UtilityCalculationService from "../summary/utilityCalculationService";
import ContentElementaryCalculationService from "../summary/contentElementaryCalculationService";
import ContentMiddleCalculationService from "../summary/contentMiddleCalculationService";
import ContentHighCalculationService from "../summary/contentHighCalculationService";
import EfficacyCalculationService from "../summary/efficacyCalculationService";



const CriterionCalculationService = {

    calculateDefaultCompletionForCriterionGroup(component, alteredCriterionObjects, currentCriterionGroupName, currentCriterion) {
        // We are building a criterionScore object that can be passed 
        // around and used for multiple scenarios
        let criterionScore = {
            criterionName:"",
            has_beneficial:false,
            all_essential_yes:true,
            essential_total_yes:0,
            essential_total_no:0,
            beneficial_total_yes:0,
            beneficial_total_no:0,
            answered_all_complete:true,
        };
        criterionScore.criterionName = currentCriterionGroupName;

        for (var key in alteredCriterionObjects) {
            if (UtilityService.isKeyInCriterion(key, currentCriterion) &&
                UtilityService.isRequiredCriterion(key) &&
                UtilityService.isCriterionValueEmpty(key, alteredCriterionObjects)) {
                
                criterionScore.answered_all_complete = false;
                if (UtilityService.isEssential(key)) {
                    criterionScore.all_essential_yes = false;
                } else {
                    criterionScore.has_beneficial = true;
                }

            } else if (UtilityService.isKeyInCriterion(key, currentCriterion) &&
                       UtilityService.isRequiredCriterion(key)) {

                if (alteredCriterionObjects[key] === "no") {
                    if (UtilityService.isEssential(key)) {
                        criterionScore.essential_total_no += 1;
                        criterionScore.all_essential_yes = false;
                    } else {
                        criterionScore.has_beneficial = true;
                        criterionScore.beneficial_total_no += 1;
                    }
                } else {
                    if (UtilityService.isEssential(key)) {
                        criterionScore.essential_total_yes += 1;
                    } else {
                        criterionScore.has_beneficial = true;
                        criterionScore.beneficial_total_yes += 1;
                    }
                }
            }
        }
        return criterionScore;
    },

    /*
     * Verify all the criteria for a single criterion group has been met
     */
    isCriterionGroupComplete(component, alteredCriterionObjects, currentCriterion) {
        let isCriterionCompleteReturnValue = true;
        let currentCriterionGroupName = UtilityService.getCriterionGroupName(currentCriterion);
        let criterionScore = {};

        criterionScore = this.calculateDefaultCompletionForCriterionGroup(component, alteredCriterionObjects, currentCriterionGroupName, currentCriterion);
        isCriterionCompleteReturnValue = criterionScore.answered_all_complete;

        if (currentCriterionGroupName.includes("quality")) {
            criterionScore = QualityCalculationService.isQualityCriterionGroupComplete(currentCriterionGroupName, criterionScore);
        } else if (currentCriterionGroupName.includes("utility")) {
            criterionScore = UtilityCalculationService.isUtilityCriterionGroupComplete(currentCriterionGroupName, criterionScore);
        } else if (currentCriterionGroupName.includes("content-elementary")) {
            criterionScore = ContentElementaryCalculationService.isContentCriterionGroupComplete(currentCriterionGroupName, criterionScore);
        } else if (currentCriterionGroupName.includes("content-middle")) {
            criterionScore = ContentMiddleCalculationService.isContentCriterionGroupComplete(currentCriterionGroupName, criterionScore);
        } else if (currentCriterionGroupName.includes("content-high")) {
            criterionScore = ContentHighCalculationService.isContentCriterionGroupComplete(currentCriterionGroupName, criterionScore);
        } else if (currentCriterionGroupName.includes("efficacy")) {
            criterionScore = EfficacyCalculationService.isContentCriterionGroupComplete(currentCriterionGroupName, criterionScore);
        }
            
        this.setCriterionScoreState(component, currentCriterionGroupName, criterionScore);
        return isCriterionCompleteReturnValue;
    },

    /*
     * Manage state for specified criterion
     */
    setCriterionScoreState(component, currentCriterionGroup, criterionScore) {
        let alteredCriterionScores =  component.state.criterionScores;
        alteredCriterionScores[currentCriterionGroup] = criterionScore;

        Repository.saveCriterionScores(component, alteredCriterionScores);
    },

    /*
     * Method that determins if the current Criterion for the given dimension is complete
     */
    calculateCriterionGroupCompletion(component, alteredCriterionObjects, changedDistinctive, changedQuestion) {
        let criterionKey = UtilityService.getCriterionQuestionKey(changedQuestion);

        if (this.isCriterionGroupComplete(component, alteredCriterionObjects, criterionKey)) {
            // Use the ICON_CHECK_ROUND as complete state so we can just pass that 
            // down and now have to add logic later
            this.setCriterionGroupCompletionStatuses(component, criterionKey, C.ICON_CHECK_ROUND);
        }
        else {
            this.setCriterionGroupCompletionStatuses(component, criterionKey, C.STATUS_IN_PROGRESS);
        }
    },

    /*
     * Save the Completion Status of each criterion.  This will allow
     * Ease of work flow when loading pages based on Criterion status
     */
    setCriterionGroupCompletionStatuses(component, criterion, status) {
        let alteredData =  component.state.criterionCompletionStatuses;
        alteredData[criterion] = status;

        Repository.saveCriterionGroupCompletionStatuses(component, alteredData);
    },
}

export default CriterionCalculationService;