// contestData.tsx

export interface Prize {
    place: number;
    description: string;
    cash?: number; // Cash prize amount in dollars
    giftCard?: string; // Description of gift card
    collaboration?: string; // Description of collaboration prize
  }
  
  export interface ContestData {
    name: string;
    date: string;
    details: string;
    entryGuidelines: string;
    judges: string[];
    prizes: Prize[];
  }
  
  export const contestData: ContestData = {
    name: "Youth 3-Hour Fiction Contest",
    date: "Saturday, January 18, 2025",
    details: `
      The Youth 3-Hour Fiction Contest will take place during the North Island Writers Conference on Saturday, January 18, 2025. All entrants will be given a specific challenge or prompt and will have three hours to craft a piece of short fiction.
    `,
    entryGuidelines: `
      - **Age Requirement:** Entrants must be 24 years old or younger.
      - **Submission:** Participants must submit their short fiction piece within the allocated three-hour timeframe.
      - **Originality:** All entries must be original works created during the contest period.
      - **Format:** Manuscripts should be submitted in [specified format, e.g., PDF or DOCX].
      - **Content:** Fiction can be of any genre, but must adhere to the given prompt.
    `,
    judges: [
      "Marlet Ashley",
      "Instructor from North Island College",
      "Instructor from North Island College"
    ],
    prizes: [
      {
        place: 1,
        description: "1st Place",
        cash: 200,
        collaboration: "Publication with Comox Valley Collective"
      },
      {
        place: 2,
        description: "2nd Place",
        cash: 100,
        giftCard: "$50 NIC Bookstore Gift Card"
      },
      {
        place: 3,
        description: "3rd Place",
        giftCard: "$50 NIC Bookstore Gift Card"
      }
    ]
  };
  