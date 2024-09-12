const Train = require("../models/Train");
const { setCache, getCache } = require("../utils/cache");

exports.getTrainLocation = async (req, res) => {
  const { trainId } = req.params;

  console.log("trainId", trainId);
  // getCache(`trainLocation:${trainId}`, async (err, cachedData) => {
  //   if (err) {
  //     return res.status(500).json({ message: "Internal server error" });
  //   }
  //   if (cachedData) {
  //     return res.status(200).json(cachedData);
  //   }
  // });

  try {
    const train = await Train.findById(trainId).populate("primary_engine");
    if (!train) {
      return res.status(404).json({ message: "Train not found" });
    }

    const trainLocation = {
      id: train._id,
      name: train.name,
      engines: train.engines,
      lastKnownLocation: train.lastKnownLocation, // Assuming this field exists
    };

    // setCache(`trainLocation:${trainId}`, trainLocation);

    res.status(200).json(trainLocation);
  } catch (error) {
    res.status(500).json({ message: "Error fetching train location", error });
  }
};
