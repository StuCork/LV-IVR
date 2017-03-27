require('dotenv').load();

var http       = require('http')
  , AlexaSkill = require('./Voice Router')
  , APP_ID     = amzn1.ask.skill.6ec5447c-4d3f-4919-ad4a-db1ac8d48516
  , MTA_KEY    = process.env.MTA_KEY;


VoiceRouter.prototype.eventHandlers.onLaunch = function(launchRequest, session, response){
  // This is when they launch the skill but don't specify what they want. Prompt
  // them for function type
  var output = 'Hello and welcome to voice router, what would you like to do today?. ;

  var reprompt = 'What would you like to do today, do you want a quote or service your policy?';

  response.ask(output, reprompt);

  console.log("onLaunch requestId: " + launchRequest.requestId
      + ", sessionId: " + session.sessionId);
};

VoiceRouter.prototype.intentHandlers = {
  GetProductIntent: function(intent, session, response){
    handleNextProductRequest(intent, session, response);
  },

  HelpIntent: function(intent, session, response){
    var speechOutput = 'What would you like to do, you can say  a quote, or service my policy?';
    response.ask(speechOutput);
  }
};

exports.handler = function(event, context) {
    var skill = new VoiceRouter();
    skill.execute(event, context);
};
