import React from "react";

import C from "../../business.logic/constants";
import SvgIcon from "../svgs/SvgIcon";
import CriterionScoreBlock from "./summary/CriterionScoreBlock";
import DimensionScoreBlock from "./summary/DimensionScoreBlock";
import DimensionInformation from "../common/DimensionInformation";
import SaveWorkInformation from "../common/SaveWorkInformation";

export default class UtilitySummaryPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h2 className="h1">
                    <SvgIcon
                        icon="settings-round"
                        isLarge="true"
                        hasSpaceAfter="true" />
                    Utility summary
                </h2>
                <p className="lead-paragraph">
                    Review the scores and your notes for each utility criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.
                </p>
                <SaveWorkInformation />
                <button className="a-btn" onClick={(e) => {this.props.printButtonClicked(C.UTILITY_PAGE); e.preventDefault();}}>
                    Print or save summary
                </button>
                <DimensionInformation dimensionName={C.UTILITY_PAGE} {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.UTILITY_PAGE]} />

                <CriterionScoreBlock
                    showExceeds={false}
                    showBeneficial={false}
                    dimensionKey="utility-crt-"
                    dimensionPage={C.UTILITY_PAGE}
                    criterionNumber="1"
                    criterionName="Criterion 1: Materials to support cognitive development"
                    criterionLead="Materials provide instructional suggestions designed to support the cognitive development of students’ financial capability."
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="utility-crt-"
                    dimensionPage={C.UTILITY_PAGE}
                    criterionNumber="2"
                    criterionName="Criterion 2: Differentiated instruction for diverse populations"
                    criterionLead="Materials support engagement among a diverse population of students by providing suggestions to differentiate instruction, exercises, and activities. Consider students’ race, ethnicity, gender, income, special education status, and English language proficiency."
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="utility-crt-"
                    dimensionPage={C.UTILITY_PAGE}
                    criterionNumber="3"
                    criterionName="Criterion 3: Quality materials for lesson planning"
                    criterionLead="Materials allow teachers to easily plan and deliver financial education instruction to students and integrate lessons into other subjects."
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="utility-crt-"
                    dimensionPage={C.UTILITY_PAGE}
                    criterionNumber="4"
                    criterionName="Criterion 4: Materials to assess mastery"
                    criterionLead="Materials include a range of formative and summative assessments to support teaching and help teachers assess mastery."
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={true}
                    dimensionKey="utility-crt-"
                    dimensionPage={C.UTILITY_PAGE}
                    criterionNumber="5"
                    criterionName="Criterion 5: Instructional supports"
                    criterionLead="Curriculum materials are instructional for teachers, in terms of helping them provide clear and accurate financial education instruction to students."
                    {...this.props} />

                <DimensionScoreBlock
                    dimensionPage={C.UTILITY_PAGE}
                    dimensionKey="utility-crt-"
                    dimensionName="Utility"
                    dimensionLead="How does this curriculum meet the criteria for utility:"
                    {...this.props} />
            </React.Fragment>
        );
    }
}
