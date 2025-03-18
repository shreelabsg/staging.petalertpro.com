// Detect if the website is running on staging or production
const isStaging = window.location.hostname.includes("staging");

// Define Cloudflare API base URLs
const API_BASE_URL = isStaging
  ? "https://staging-petalertpro.contact-shreelabs.workers.dev"
  : "https://petalertpro.contact-shreelabs.workers.dev";

// Helper function to make API calls
function apiRequest(endpoint, options = {}) {
  return fetch(`${API_BASE_URL}${endpoint}`, options)
    .then(response => response.json())
    .catch(error => console.error("API Error:", error));
}


