/*
This file contains all constants in the app.
*/

const C = {
	// ACTION TYPES
	CHANGE_DISTINCTIVE: "CHANGE_DISTINCTIVE",

	// OTHER CONSTANTS
  CONTENT_PAGE: "CONTENT",
  UTILITY_PAGE: "UTILITY",
  QUALITY_PAGE: "QUALITY",
  EFFICACY_PAGE: "EFFICACY",
  START_PAGE: "START",

  CONTENT_STATUS: "content_status",
  UTILITY_STATUS: "utility_status",
  QUALITY_STATUS: "quality_status",
  EFFICACY_STATUS: "efficacy_status",

  CONTENT_CRITERION_IS_COMPLETE: "content_is_complete",
  UTILITY_CRITERION_IS_COMPLETE: "utility_is_complete",
  QUALITY_CRITERION_IS_COMPLETE: "quality_is_complete",
  EFFICACY_CRITERION_IS_COMPLETE: "efficacy_is_complete",


  CONTENT_SUMMARY_BUTTON_ENABLED: "content_summary_enabled",
  QUALITY_SUMMARY_BUTTON_ENABLED: "quality_summary_enabled",
  UTILITY_SUMMARY_BUTTON_ENABLED: "utility_summary_enabled",
  EFFICACY_SUMMARY_BUTTON_ENABLED: "efficacy_summary_enabled",

  STATUS_IN_START: "",
  STATUS_IN_PROGRESS: "In Progress...",
  STATUS_COMPLETE: "Complete",

  START_PAGE_RELATIVE_URL: "../../tdp/crt-start/",

  GRADE_ELEMENTARY: "Elementary School",
  GRADE_MIDDLE: "Middle School",
  GRADE_HIGH: "Middle School",

  SVG_CHECK_ROUND: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1200" class="cf-icon-svg"><path d="M500 105.2c-276.1 0-500 223.9-500 500s223.9 500 500 500 500-223.9 500-500-223.9-500-500-500zm259 284.2L481.4 870.3c-8.2 14.1-22.7 23.4-39 24.8-1.4.1-2.9.2-4.3.2-14.8 0-28.9-6.6-38.4-18L244.4 690.9c-17.9-21-15.4-52.6 5.7-70.5 21-17.9 52.6-15.4 70.5 5.7.2.3.5.5.7.8l109.4 131.4 241.8-418.8c13.6-24 44.2-32.4 68.2-18.8 24 13.6 32.4 44.2 18.8 68.2l-.5.5z"/></svg>',
  SVG_CREDIT_REPORT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 651.7 1200" class="cf-icon-svg"><path d="M651.7 367.7v-24l-91.4-91.4-66.6-66.6L469 161H35c-19.3.1-34.9 15.7-35 35v817.8c.1 19.3 15.7 34.9 35 35h581.7c19.3-.1 34.9-15.7 35-35V367.7zm-60 59v562.1H60V221h359.6v134.8c.1 20 16.2 36.2 36.2 36.2h135.9v34.7z"/><path d="M279.6 802.8l-77.8-93.4c-14.1-17-39.4-19.3-56.3-5.1-17 14.1-19.3 39.4-5.1 56.3l114.5 137.5c7.6 9.1 18.9 14.4 30.7 14.4 1.1 0 2.3-.1 3.4-.2 13-1.1 24.7-8.5 31.2-19.9l204.7-354.5c11.2-19.1 4.8-43.6-14.3-54.7s-43.6-4.8-54.7 14.3c-.1.2-.2.3-.3.5l-176 304.8z"/></svg>',
  SVG_DOCUMENT: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 651.7 1200" class="cf-icon-svg"><path d="M30 161c-16.5 0-30 13.5-30 30v827.8c0 16.5 13.5 30 30 30h591.7c16.5 0 30-13.5 30-30V343.7L469 161H30zm389.6 60v134.8c0 19.9 16.3 36.2 36.2 36.2h135.9V988.8H60V221h359.6z"/><path d="M123.8 768.6h394.8v50H123.8zM123.8 644h394.8v50H123.8zM123.8 519.5h394.8v50H123.8z"/><circle cx="194" cy="382.3" r="60"/></svg>',
  SVG_SETTINGS: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 834 1200" class="cf-icon-svg"><path d="M804.4 505.7L746 495.6c-3.2-.6-6.5-.6-9.7 0-7.8-30.4-19.8-59.5-35.9-86.5 2.7-1.9 5-4.2 6.9-6.9l34.2-48.5c9.5-13.5 7.8-34.1-3.9-45.7l-51.4-51.4c-11.7-11.7-32.2-13.4-45.7-3.9L592 286.9c-2.7 1.9-5 4.2-6.9 6.9-27-16-56.1-28.1-86.5-35.9.6-3.2.6-6.5 0-9.7l-10.1-58.4c-2.8-16.3-18.6-29.6-35.1-29.6h-72.7c-16.5 0-32.3 13.3-35.1 29.6l-10.1 58.4c-.6 3.2-.6 6.5 0 9.7-30.4 7.8-59.5 19.8-86.5 35.9-1.9-2.7-4.2-5-6.9-6.9l-48.5-34.2c-13.5-9.5-34.1-7.8-45.7 3.9L96.5 308c-11.7 11.7-13.4 32.2-3.9 45.7l34.2 48.5c1.9 2.7 4.2 5 6.9 6.9-16 27-28.1 56.1-35.9 86.5-3.2-.6-6.5-.6-9.7 0l-58.4 10.1C13.3 508.5 0 524.3 0 540.8v72.7c0 16.5 13.3 32.3 29.6 35.1L88 658.8c3.2.6 6.5.6 9.7 0 7.8 30.4 19.8 59.5 35.9 86.5-2.7 1.9-5 4.2-6.9 6.9l-34.2 48.5c-9.5 13.5-7.8 34.1 3.9 45.7l51.4 51.4c11.7 11.7 32.2 13.4 45.7 3.9l48.5-34.2c2.7-1.9 5-4.2 6.9-6.9 27 16 56.1 28.1 86.5 35.9-.6 3.2-.6 6.5 0 9.7l10.1 58.4c2.8 16.3 18.6 29.6 35.1 29.6h72.7c16.5 0 32.3-13.3 35.1-29.6l10.1-58.4c.6-3.2.6-6.5 0-9.7 30.4-7.8 59.5-19.8 86.5-35.9 1.9 2.7 4.2 5 6.9 6.9l48.5 34.2c13.5 9.5 34.1 7.8 45.7-3.9l51.4-51.4c11.7-11.7 13.4-32.2 3.9-45.7l-34.2-48.5c-1.9-2.7-4.2-5-6.9-6.9 16-27 28.1-56.1 35.9-86.5 3.2.6 6.5.6 9.7 0l58.4-10.1c16.3-2.8 29.6-18.6 29.6-35.1v-72.7c.1-16.6-13.2-32.4-29.5-35.2zM417 719.2c-78.4 0-142-63.6-142-142s63.6-142 142-142 142 63.6 142 142-63.6 142-142 142z"/></svg>',
  SVG_STAR: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 969.7 1200" class="cf-icon-svg"><path d="M843.8 592.5l94.6-87.5c52.5-48.5 37.3-95.1-33.7-103.6l-128-15.2-129-15.3-81.5-176.6-27-58.5c-30-64.9-79-64.9-108.9 0l-27 58.5L322 371l-129.1 15.3-128 15.2c-71 8.4-86.1 55-33.6 103.6l47.3 43.7 47.3 43.7 95.4 88.3L196 808.2l-12.6 63.2-12.6 63.2c-13.9 70.1 25.7 98.9 88.1 64l225.9-126.4 225.9 126.4c62.4 34.9 102 6.1 88.1-64l-12.6-63.2-37.9-190.7 95.5-88.2z"/></svg>',
};

export default C;
