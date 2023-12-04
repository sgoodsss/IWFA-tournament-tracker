// import Event model
const { Event } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
    // get a single event by the event id or event name
    async getSingleEvent({ event = null, params }, res) {
        const foundEvent = await Event.findOne({
            $or: [{ _id: event ? event._id : params.id }, { name: params.name }],
        });

        if (!foundEvent) {
            return res.status(400).json({ message: 'Cannot find an event with this id or name!' });
        }

        res.json(foundEvent);
    },

    async getAllEvents(req, res) {
        try {
            const myEvents = await Event.find();
            if (!myEvents) {
                res.status(404).json({ message: "No events were found :-(" });
                return;
            }

            res.status(200).json(myEvents);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }

};
