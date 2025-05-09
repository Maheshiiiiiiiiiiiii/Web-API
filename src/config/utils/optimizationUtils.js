const mongoose = require('mongoose');

// Utility functions for optimizing database queries

function applyQueryOptimization(model, query) {
    return model.find(query).lean().exec();  // lean() makes queries faster
}

module.exports = {
    applyQueryOptimization,
};
