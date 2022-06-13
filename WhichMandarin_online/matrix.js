Survey.StylesManager.applyTheme("defaultV2");
var json = {
  "elements": [
    {
      "type": "matrix",
      "name": "Quality",
      "title": "Please indicate if you agree or disagree with the following statements",
      "columns": [
        {
          "value": 1,
          "text": "Strongly Disagree"
        },
        {
          "value": 2,
          "text": "Disagree"
        },
        {
          "value": 3,
          "text": "Neutral"
        },
        {
          "value": 4,
          "text": "Agree"
        }, {
          "value": 5,
          "text": "Strongly Agree"
        }
      ],
      "rows": [
        {
          "value": "affordable",
          "text": "Product is affordable"
        }, {
          "value": "does what it claims",
          "text": "Product does what it claims"
        }, {
          "value": "better then others",
          "text": "Product is better than other products on the market"
        }, {
          "value": "easy to use",
          "text": "Product is easy to use"
        }
      ]
    }
  ]
};
window.survey = new Survey.Model(json);
survey.onComplete.add(function (sender) {
  document.querySelector('#surveyResult').textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
});
ReactDOM.render (<SurveyReact.Survey model={survey}/>, document.getElementById("surveyElement"));
