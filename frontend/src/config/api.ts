/**
 * API Configuration
 *
 * Centralized configuration for backend API URL
 * Uses environment variable for production deployments
 */

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const getAuthHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem('auth_token')}`
});

export const API_ENDPOINTS = {
  // Auth endpoints
  signup: `${API_URL}/api/auth/signup`,
  login: `${API_URL}/api/auth/login`,
  logout: `${API_URL}/api/auth/logout`,
  googleAuth: `${API_URL}/api/auth/google-auth`,
  profile: `${API_URL}/api/auth/profile`,
  updateProfile: `${API_URL}/api/auth/profile`,
  forgotPassword: `${API_URL}/api/auth/forgot-password`,
  resetPassword: (token: string) => `${API_URL}/api/auth/reset-password/${token}`,
  enable2FA: `${API_URL}/api/auth/enable-2fa`,
  disable2FA: `${API_URL}/api/auth/disable-2fa`,
  verify2FA: `${API_URL}/api/auth/verify-2fa`,
  resend2FA: `${API_URL}/api/auth/resend-2fa`,
  uploadAvatar: `${API_URL}/api/auth/upload-avatar`,
  removeAvatar: `${API_URL}/api/auth/remove-profile-picture`,

  // Trip endpoints
  planTrip: `${API_URL}/plan-trip`,
  chat: `${API_URL}/chat`,
  saveTrip: `${API_URL}/api/auth/save-trip`,
  getTrips: `${API_URL}/api/auth/trips`,
  getTrip: (id: number) => `${API_URL}/api/auth/trips/${id}`,
  updateTrip: (id: number) => `${API_URL}/api/auth/trips/${id}`,
  deleteTrip: (id: number) => `${API_URL}/api/auth/trips/${id}`,
  sharedTrip: (token: string) => `${API_URL}/api/auth/shared-trip/${token}`,

  // Tourism & Master Platform endpoints
  provinces: `${API_URL}/api/provinces`,
  provinceDetail: (id: string) => `${API_URL}/api/provinces/${id}`,
  destinations: `${API_URL}/api/destinations`,
  destinationDetail: (id: string) => `${API_URL}/api/destinations/${id}`,
  cuisines: `${API_URL}/api/cuisine`,
  festivals: `${API_URL}/api/festivals`,
  costs: (provinceId: string) => `${API_URL}/api/costs/${provinceId}`,
  adminStats: `${API_URL}/api/admin/stats`,
  adminDestinations: `${API_URL}/api/admin/destinations`,
  adminDeleteDestination: (id: string) => `${API_URL}/api/admin/destinations/${id}`,
  adminLogs: `${API_URL}/api/admin/logs`,
};
