// URL validation utilities
// TODO: Implement URL validation functions

/**
 * Validate if a string is a valid URL
 * @param {string} url - URL to validate
 * @returns {boolean} True if valid URL
 */
function isValidUrl(url) {
  // TODO: Implement URL validation
  // Check for proper URL format, protocol, etc.
  // Consider using URL constructor or regex
  
  return false; // Replace with your implementation
}

/**
 * Normalize URL (add protocol if missing, etc.)
 * @param {string} url - URL to normalize
 * @returns {string} Normalized URL
 */
function normalizeUrl(url) {
  // TODO: Implement URL normalization
  // Add http:// if no protocol specified
  // Remove trailing slashes, etc.
  
  return url; // Replace with your implementation
}

/**
 * Check if URL is safe (not malicious)
 * @param {string} url - URL to check
 * @returns {boolean} True if URL appears safe
 */
function isSafeUrl(url) {
  // TODO: Implement basic safety checks
  // Block localhost, private IPs, suspicious domains, etc.
  
  return true; // Replace with your implementation
}

module.exports = {
  isValidUrl,
  normalizeUrl,
  isSafeUrl
};
