import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
import { TurnContext, InvokeResponse } from "botbuilder";
import { TeamsFxAdaptiveCardActionHandler, InvokeResponseFactory } from "@microsoft/teamsfx";
import responseCard from "../adaptiveCards/doStuffActionResponse.json";
import { CardData } from "../cardModels";

/**
 * The `DoStuffActionHandler` registers an action with the `TeamsFxBotActionHandler` and responds
 * with an Adaptive Card if the user clicks the Adaptive Card action with `triggerVerb`.
 */
export class JiraStatusActionHandler implements TeamsFxAdaptiveCardActionHandler {
  /**
   * A global unique string associated with the `Action.Execute` action.
   * The value should be the same as the `verb` property which you define in your adaptive card JSON.
   */
  triggerVerb = "jirastatus";

  async handleActionInvoked(context: TurnContext, actionData: any): Promise<InvokeResponse> {
    /**
     * You can send an adaptive card to respond to the card action invoke.
     */
    const cardData: CardData = {
      title: "Here is the status of this card. " + context.activity.value.action.title + " In Development",
      body: "",
    };

    console.log(`Bot received message: again in status` + context.activity.value.action.title);
    


  const x = JSON.parse('{"type": "AdaptiveCard","body": [{"type": "TextBlock","size": "Medium","weight": "Bolder", "text": "${title}"},{"type": "TextBlock", "text": "${body}","wrap": true}, {"type": "TextBlock", "text": "Click on Below Status for Updating this Card","wrap": true} , {"type": "ActionSet","actions": [ { "type": "Action.Execute", "verb": "jiraupdate", "title": "BNGIN-1 - Complete"}, { "type": "Action.Execute", "verb": "jiraupdate", "title": "BNGIN-1 - Close"}] }],"$schema": "http://adaptivecards.io/schemas/adaptive-card.json", "version": "1.4"}');

    const cardJson = AdaptiveCards.declare(x).render(cardData);
    return InvokeResponseFactory.adaptiveCard(cardJson);

    /**
     * If you want to send invoke response with text message, you can:
     * 
     return InvokeResponseFactory.textMessage("[ACK] Successfully!");
    */

    /**
     * If you want to send invoke response with error message, you can:
     *
     * return InvokeResponseFactory.errorResponse(InvokeResponseErrorCode.BadRequest, "The incoming request is invalid.");
     */
  }
}
