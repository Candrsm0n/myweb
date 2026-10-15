const allowedHosts = (import.meta.env.VITE_ALLOWED_HOSTS || "")
  .split(",")
  .map((host) => host.trim().toLowerCase())
  .filter(Boolean);

export function isAllowedHost(hostname = window.location.hostname): boolean {
  if (allowedHosts.length === 0) return true;
  return allowedHosts.includes(hostname.toLowerCase());
}
