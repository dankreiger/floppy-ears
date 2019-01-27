var exports = (module.exports = {});

exports.getTimeToInteractive = function() {
  const { domInteractive, requestStart } = window.performance.timing;
  return domInteractive - requestStart;
};

exports.getResourceEntries = function() {
  return window.performance.getEntriesByType('resource') || [];
};
