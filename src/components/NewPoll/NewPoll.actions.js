import { BRIDGEBOT_ACTIONS } from "../../constants";
import { getChannelsList } from "../../api/index";

const savePollGroups = pollGroups => ({
  type: BRIDGEBOT_ACTIONS.SAVE_POLL_GROUPS,
  payload: pollGroups
});

const shapePollData = pollGroups =>
  pollGroups.map(pollGroup => ({ id: pollGroup.id, name: pollGroup.name }));

export const handleChangePollGroup = e => ({
  type: BRIDGEBOT_ACTIONS.SET_POLL_GROUP,
  payload: e.target.value
})

export const handleChangePollQuestion = e => ({
    type: BRIDGEBOT_ACTIONS.SET_POLL_QUESTION,
    payload: e.target.value
});

export const fetchPollGroups = () => dispatch => {
  getChannelsList()
    .then(res => res.json())
    .then(response => response.channels)
    .then(pollGroups => shapePollData(pollGroups))
    .then(pollGroups => dispatch(savePollGroups(pollGroups)));
};