const CrowdingInfo = require('../models/CrowdingInfo');
const Train = require('../models/Train');

const addCrowdingInfo = async (req, res) => {
  try {
    const { trainId, crowdingLevel, timestamp } = req.body;
    const train = await Train.findById(trainId);
    if (!train) {
      return res.status(404).json({ message: 'Train not found' });
    }

    const crowdingInfo = new CrowdingInfo({ train: trainId, crowdingLevel, timestamp });
    await crowdingInfo.save();

    res.status(201).json({ message: 'Crowding info added', crowdingInfo });
  } catch (error) {
    res.status(500).json({ message: 'Error adding crowding info', error });
  }
};

const getCrowdingInfo = async (req, res) => {
  try {
    const { trainId } = req.params;
    const crowdingInfo = await CrowdingInfo.find({ train: trainId }).sort({ timestamp: -1 });

    if (!crowdingInfo.length) {
      return res.status(404).json({ message: 'No crowding info found' });
    }

    res.status(200).json(crowdingInfo);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving crowding info', error });
  }
};

module.exports = {
  addCrowdingInfo,
  getCrowdingInfo,
};
