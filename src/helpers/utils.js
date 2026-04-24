export function formatViews(count) {
  if (!count) return "0 views";

  const num = parseInt(count);
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M views";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K views";
  }

  return num + " views";
}

export function timeAgo(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const diffInSeconds = Math.floor((now - past) / 1000);

  const years = Math.floor(diffInSeconds / 31536000);
  if (years >= 1) return years + (years === 1 ? " year ago" : " years ago");

  const months = Math.floor(diffInSeconds / 2592000);
  if (months >= 1)
    return months + (months === 1 ? " month ago" : " months ago");

  const weeks = Math.floor(diffInSeconds / 604800);
  if (weeks >= 1) return weeks + (weeks === 1 ? " week ago" : " weeks ago");

  const days = Math.floor(diffInSeconds / 86400);
  if (days >= 1) return days + (days === 1 ? " day ago" : " days ago");

  const hours = Math.floor(diffInSeconds / 3600);
  if (hours >= 1) return hours + (hours === 1 ? " hour ago" : " hours ago");

  const mins = Math.floor(diffInSeconds / 60);
  if (mins >= 1) return mins + (mins === 1 ? " minute ago" : " minutes ago");

  return "just now";
}
