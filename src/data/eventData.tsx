export interface Event {
  title: string;
  dateTime: string;
  location: string;
  description: string;
  cost: string;
  presenter?: string;
  submissionDeadline?: string;
  editor?: string;
  imageUrl?: string;
}

export const eventData: Event[] = [
  {
    title: "Welcome & Keynote Address",
    dateTime: "Friday, January 17, 2025, 7:00 – 8:30 p.m.",
    location: "Stan Hagen Theatre, K’ómoux Hall",
    description: "Welcome from the CV Writers Society President & North Island College Liaison. Keynote speaker Ian Ferguson presents *How to be a Humour Being*, exploring the role of humour in bridging gaps and communicating effectively. Ian will also share funny stories and anecdotes.",
    cost: "Free",
    imageUrl: "https://images.pexels.com/photos/3643925/pexels-photo-3643925.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Late Registration & Networking",
    dateTime: "Saturday, January 18, 2025, 8:30 – 8:55 a.m.",
    location: "NIC Comox Valley Campus, Tyee Hall",
    description: "Late registration and an opportunity to network with writers and presenters before the morning workshop sessions.",
    cost: "Free",
    imageUrl: "https://images.pexels.com/photos/7820308/pexels-photo-7820308.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Whodunits and Punchlines: What Goes into a Comedic Mystery",
    dateTime: "Saturday, January 18, 2025, 9:00 a.m. – 3:00 p.m.",
    location: "Tyee Hall, Room 203",
    presenter: "Ian Ferguson",
    description: "This 5-hour workshop covers structuring plots, outlining, and using humour to enhance readability. Includes hands-on exercises to develop skills in creating comedic mysteries.",
    cost: "$52.00",
    imageUrl: "https://images.pexels.com/photos/1995842/pexels-photo-1995842.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "So, You Want to Write a Movie",
    dateTime: "Saturday, January 18, 2025, 9:00 a.m. – 3:00 p.m.",
    location: "Tyee Hall, Room 204",
    presenter: "Larry Bambrick",
    description: "Explore the core concepts of screenwriting through this interactive lecture, covering dialogue, character, and the three-act structure. Ideal for aspiring screenwriters.",
    cost: "$52.00",
    imageUrl: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Lunch on the Road with a Travel Writer",
    dateTime: "Saturday, January 18, 2025, 12:10 – 12:50 p.m.",
    location: "Tyee Hall, Student Lounge",
    presenter: "Kim Letson",
    description: "Join Kim Letson for a discussion on transforming travel adventures into engaging stories with universal themes. Bring a brown bag lunch.",
    cost: "Free",
    imageUrl: "https://images.pexels.com/photos/3184347/pexels-photo-3184347.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "The Art of Writing a Short Story",
    dateTime: "Saturday, January 18, 2025, 1:00 – 4:00 p.m.",
    location: "Tyee Hall, Room 205",
    presenter: "Robert Hilles",
    description: "A 3-hour workshop covering the nuances of short story writing, including critiques and market insights. Participants will learn to refine their craft and submit their work.",
    cost: "$32.00",
    imageUrl: "https://images.pexels.com/photos/3321791/pexels-photo-3321791.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Writing Deeper Dialogue",
    dateTime: "Sunday, January 19, 2025, 9:00 a.m. – 12:00 p.m.",
    location: "Tyee Hall, Room 204",
    presenter: "Jo-Anne (JP) McLean",
    description: "Master the art of dialogue to reveal character, advance plot, and heighten emotion in this 3-hour workshop.",
    cost: "$32.00",
    imageUrl: "https://images.unsplash.com/photo-1519228172884-fba2696ae551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RGVlcGVyfGVufDB8fDB8fHww",
  },
  {
    title: "Electric Elocution: Breathe Life into Your Readings",
    dateTime: "Sunday, January 19, 2025, 12:10 – 12:50 p.m.",
    location: "Tyee Hall, Student Lounge",
    presenter: "Diana Kolpak",
    description: "Improve your presentation skills and learn techniques to engage your audience and deliver impactful readings.",
    cost: "Free",
    imageUrl: "https://images.pexels.com/photos/1432516/pexels-photo-1432516.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Get a (Shelf) Life: Bespoke Marketing Strategies",
    dateTime: "Sunday, January 19, 2025, 1:00 – 4:00 p.m.",
    location: "Tyee Hall, Room 205",
    presenter: "Joy Gugelar",
    description: "Create a custom marketing campaign for your book with strategies for engaging readers, booksellers, and media effectively.",
    cost: "$32.00",
    imageUrl: "https://images.pexels.com/photos/4114710/pexels-photo-4114710.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Blue Pencil Café",
    dateTime: "Zoom or in-person session. Dates & times arranged after registering.",
    location: "NIC Courtenay Campus, Tyee Hall",
    editor: "Dave Flawse",
    description: "Receive personalized feedback on your manuscript in a 30-minute session. Ideal for fiction and nonfiction writers.",
    cost: "$62.00 per session",
    submissionDeadline: "January 12, 2025",
    imageUrl: "https://images.pexels.com/photos/1432516/pexels-photo-1432516.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
