const CrowdingInfo = require('../models/CrowdingInfo');
const Train = require('../models/Train');

// Fetch all crowding information
exports.getCrowdingInfo = async (req, res) => {
    try {
        const crowdingInfo = await CrowdingInfo.find();
        res.status(200).json(crowdingInfo);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching crowding info', error });
    }
};

// Approve a specific crowding information entry
exports.approveCrowdingInfo = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedInfo = await CrowdingInfo.findByIdAndUpdate(id, { approved: true }, { new: true });
        if (!updatedInfo) {
            return res.status(404).json({ message: 'Crowding info not found' });
        }
        res.status(200).json(updatedInfo);
    } catch (error) {
        res.status(500).json({ message: 'Error approving crowding info', error });
    }
};

// Delete a specific crowding information entry
exports.deleteCrowdingInfo = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedInfo = await CrowdingInfo.findByIdAndDelete(id);
        if (!deletedInfo) {
            return res.status(404).json({ message: 'Crowding info not found' });
        }
        res.status(200).json({ message: 'Crowding info deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting crowding info', error });
    }
};

// Create a new crowding information entry
exports.createCrowdingInfo = async (req, res) => {
  const { train, firstClass, secondClass, thirdClass } = req.body;
  try {
      const newCrowdingInfo = new CrowdingInfo({ 
          trainId: train, 
          crowdingLevels: {
              firstClass: firstClass,
              secondClass: secondClass,
              thirdClass: thirdClass
          },
          timestamp: new Date() // Assuming you want to set the current timestamp
      });
      await newCrowdingInfo.save();
      res.status(201).json(newCrowdingInfo);
  } catch (error) {
      res.status(500).json({ message: 'Error creating crowding info', error });
  }
};