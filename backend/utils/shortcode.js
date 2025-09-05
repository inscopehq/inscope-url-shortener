// Utility functions for generating short codes
// TODO: Implement your short code generation logic here!

/**
 * Generate a random short code
 * @param {number} length - Length of the short code (default: 6)
 * @returns {string} Random alphanumeric string
 */
function generateRandomShortCode(length = 6) {
  // TODO: Implement random short code generation
  // Hint: Use alphanumeric characters (a-z, A-Z, 0-9)
  // Example approach:
  // const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  // let result = '';
  // for (let i = 0; i < length; i++) {
  //   result += chars.charAt(Math.floor(Math.random() * chars.length));
  // }
  // return result;
  
  return 'TODO'; // Replace with your implementation
}

/**
 * Generate short code from database ID (Base62 encoding)
 * @param {number} id - Database ID
 * @returns {string} Base62 encoded string
 */
function generateBase62ShortCode(id) {
  // TODO: Implement Base62 encoding
  // This creates deterministic short codes based on database IDs
  // Hint: Use base 62 (0-9, a-z, A-Z) for compact representation
  
  return 'TODO'; // Replace with your implementation
}

/**
 * Check if a short code is valid format
 * @param {string} shortCode - Short code to validate
 * @returns {boolean} True if valid format
 */
function isValidShortCode(shortCode) {
  // TODO: Implement validation logic
  // Check length, allowed characters, etc.
  
  return false; // Replace with your implementation
}

module.exports = {
  generateRandomShortCode,
  generateBase62ShortCode,
  isValidShortCode
};
