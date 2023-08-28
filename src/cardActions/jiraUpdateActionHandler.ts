import { AdaptiveCards } from "@microsoft/adaptivecards-tools";
import { TurnContext, InvokeResponse } from "botbuilder";
import { TeamsFxAdaptiveCardActionHandler, InvokeResponseFactory } from "@microsoft/teamsfx";
import responseCard from "../adaptiveCards/doStuffActionResponse.json";
import { CardData } from "../cardModels";

/**
 * The `DoStuffActionHandler` registers an action with the `TeamsFxBotActionHandler` and responds
 * with an Adaptive Card if the user clicks the Adaptive Card action with `triggerVerb`.
 */
export class JiraUpdateActionHandler implements TeamsFxAdaptiveCardActionHandler {
  /**
   * A global unique string associated with the `Action.Execute` action.
   * The value should be the same as the `verb` property which you define in your adaptive card JSON.
   */
  triggerVerb = "jiraupdate";

  async handleActionInvoked(context: TurnContext, actionData: any): Promise<InvokeResponse> {
    /**
     * You can send an adaptive card to respond to the card action invoke.
     */
    const cardData: CardData = {
        title: "[ACK] JIRA Updated Successfully!",
        body: ""
      };

    console.log(`Bot received message: again in update` + context.activity.value.action.title);
    


   const x = JSON.parse('{"type": "AdaptiveCard","body": [{"type": "TextBlock","size": "Medium","weight": "Bolder", "text": "${title}" }],"$schema": "http://adaptivecards.io/schemas/adaptive-card.json", "version": "1.4"}');

    const cardJson = AdaptiveCards.declare(x).render(cardData);
    return InvokeResponseFactory.adaptiveCard(cardJson);

    /**
     * If you want to send invoke response with text message, you can:
     * */
    // return InvokeResponseFactory.textMessage("[ACK] JIRA Updated Successfully!");
    

    /**
     * If you want to send invoke response with error message, you can:
     *
     * return InvokeResponseFactory.errorResponse(InvokeResponseErrorCode.BadRequest, "The incoming request is invalid.");
     */
  }
}
