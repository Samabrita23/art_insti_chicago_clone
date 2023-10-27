// Function to format a date range based on start and end dates
export const formatDateRange = (startAt: string, endAt: string): string => {
  // Convert start and end date strings to Date objects
  const startDate = new Date(startAt);
  const endDate = new Date(endAt);

  // Options for formatting the date
  const options: Intl.DateTimeFormatOptions = {
    month: "short", // Display the abbreviated month name (e.g., "Jan")
    day: "numeric", // Display the day of the month as a number
  };

  // Format the start date using the specified options
  const formattedStartDate = startDate.toLocaleDateString("en-US", options);

  // Initialize variable to store formatted end date
  let formattedEndDate: string;

  // Check if the start and end dates have the same year
  if (startDate.getFullYear() === endDate.getFullYear()) {
    // If same year, include the year in the end date format
    formattedEndDate = endDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric", // Include the year in the format (e.g., "Jan 1, 2023")
    });
  } else {
    // If different years, use the same format as the start date
    formattedEndDate = endDate.toLocaleDateString("en-US", options);
  }

  // Return the formatted date range string (e.g., "Jan 1 - Dec 31, 2023")
  return `${formattedStartDate} - ${formattedEndDate}`;
};
