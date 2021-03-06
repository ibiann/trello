import {
  createSlice, current
} from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    boards: [{
        id: "board-1",
        name: "Image processing",
        background: "https://cutewallpaper.org/21/trello-backgrounds/Windows-Backgrounds-Mountain-Stock-Photos-Backgroundnature-.jpg",
        stared: false,
        description: "People detected image processing",
        columnOrder: ["column-1", "column-2", "column-3"],
        columns: [{
            id: "column-1",
            boardId: "board-1",
            title: "To do column",
            cardOrder: [
              "card-1",
              "card-2",
              "card-3",
              "card-4",
              "card-5",
              "card-6",
            ],
            cards: [{
                id: "card-1",
                boardId: "board-1",
                columnId: "column-1",
                title: "Title of card 1",
                cover: "https://scontent.fhan14-1.fna.fbcdn.net/v/t45.1600-4/277895101_6292993313882_1968459955091717650_n.jpg?stp=cp0_dst-jpg_p180x540_q75_spS444&_nc_cat=107&ccb=1-5&_nc_sid=67cdda&_nc_ohc=peTOX7IllF0AX-wc6ov&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8QmQNCN3S_7LV7W1e915MiUFFWlQyTKB0-5le9ESLtpA&oe=62664F45",
              },
              {
                id: "card-2",
                boardId: "board-1",
                columnId: "column-1",
                title: "Title of card 2",
                cover: null,
              },
              {
                id: "card-3",
                boardId: "board-1",
                columnId: "column-1",
                title: "Title of card 3",
                cover: null,
              },
              {
                id: "card-4",
                boardId: "board-1",
                columnId: "column-1",
                title: "Title of card 4",
                cover: null,
              },
              {
                id: "card-5",
                boardId: "board-1",
                columnId: "column-1",
                title: "Title of card 5",
                cover: null,
              },
              {
                id: "card-6",
                boardId: "board-1",
                columnId: "column-1",
                title: "Title of card 6",
                cover: null,
              },
            ],
          },
          {
            id: "column-2",
            boardId: "board-1",
            title: "Inprogress column",
            cardOrder: ["card-8", "card-9", "card-10"],
            cards: [{
                id: "card-8",
                boardId: "board-1",
                columnId: "column-2",
                title: "Title of card 8",
                cover: null,
                
              },
              {
                id: "card-9",
                boardId: "board-1",
                columnId: "column-2",
                title: "Title of card 9",
                cover: null,
              },
              {
                id: "card-10",
                boardId: "board-1",
                columnId: "column-2",
                title: "Title of card 10",
                cover: null,
              },
            ],
          },
          {
            id: "column-3",
            boardId: "board-1",
            title: "Done column",
            cardOrder: ["card-11", "card-12", "card-13"],
            cards: [{
                id: "card-11",
                boardId: "board-1",
                columnId: "column-3",
                title: "Title of card 11",
                cover: null,
              },
              {
                id: "card-12",
                boardId: "board-1",
                columnId: "column-3",
                title: "Title of card 12",
                cover: null,
              },
              {
                id: "card-13",
                boardId: "board-1",
                columnId: "column-3",
                title: "Title of card 13",
                cover: null,
              },
            ],
          },
        ],
      },
      {
        id: "board-2",
        name: "Ecommerce Website",
        background: "https://cutewallpaper.org/21/trello-backgrounds/Background-Scapes-by-Octopus-X-in-Environments-UE4-Marketplace.png",
        stared: false,
        description: "Ecommerce website for customers",
        columnOrder: ["column-1", "column-2", "column-3"],
        columns: [{
            id: "column-1",
            boardId: "board-2",
            title: "To do column",
            cardOrder: [
              "card-1",
              "card-2",
              "card-3",
              "card-4",
              "card-5",
              "card-6",
            ],
            cards: [{
                id: "card-1",
                boardId: "board-2",
                columnId: "column-1",
                title: "Title of card 1",
                cover: null,
              },
              {
                id: "card-2",
                boardId: "board-2",
                columnId: "column-1",
                title: "Title of card 2",
                cover: null,
              },
              {
                id: "card-3",
                boardId: "board-2",
                columnId: "column-1",
                title: "Title of card 3",
                cover: null,
              },
              {
                id: "card-4",
                boardId: "board-2",
                columnId: "column-1",
                title: "Title of card 4",
                cover: "https://scontent.fhan14-1.fna.fbcdn.net/v/t45.1600-4/277895101_6292993313882_1968459955091717650_n.jpg?stp=cp0_dst-jpg_p180x540_q75_spS444&_nc_cat=107&ccb=1-5&_nc_sid=67cdda&_nc_ohc=peTOX7IllF0AX-wc6ov&_nc_ht=scontent.fhan14-1.fna&oh=00_AT8QmQNCN3S_7LV7W1e915MiUFFWlQyTKB0-5le9ESLtpA&oe=62664F45",
              },
              {
                id: "card-5",
                boardId: "board-2",
                columnId: "column-1",
                title: "Title of card 5",
                cover: null,
              },
              {
                id: "card-6",
                boardId: "board-2",
                columnId: "column-1",
                title: "Title of card 6",
                cover: null,
              },
            ],
          },
          {
            id: "column-2",
            boardId: "board-2",
            title: "Inprogress column",
            cardOrder: ["card-8", "card-9", "card-10"],
            cards: [{
                id: "card-8",
                boardId: "board-2",
                columnId: "column-2",
                title: "Title of card 8",
                cover: null,
              },
              {
                id: "card-9",
                boardId: "board-2",
                columnId: "column-2",
                title: "Title of card 9",
                cover: null,
              },
              {
                id: "card-10",
                boardId: "board-2",
                columnId: "column-2",
                title: "Title of card 10",
                cover: null,
              },
            ],
          },
          {
            id: "column-3",
            boardId: "board-2",
            title: "Done column",
            cardOrder: ["card-11", "card-12", "card-13"],
            cards: [{
                id: "card-11",
                boardId: "board-2",
                columnId: "column-3",
                title: "Title of card 11",
                cover: null,
              },
              {
                id: "card-12",
                boardId: "board-2",
                columnId: "column-3",
                title: "Title of card 12",
                cover: null,
              },
              {
                id: "card-13",
                boardId: "board-2",
                columnId: "column-3",
                title: "Title of card 13",
                cover: null,
              },
            ],
          },
        ],
      },
    ],
    backgrounds: [
      "https://cutewallpaper.org/21/trello-backgrounds/Trello-Pictures-Download-Free-Images-on-Unsplash.jpg",
      "https://cutewallpaper.org/21/trello-backgrounds/Abby-and-Everest-Application-ROBLOX.jpg",
      "https://cutewallpaper.org/21/trello-backgrounds/Windows-Backgrounds-Mountain-Stock-Photos-Backgroundnature-.jpg",
      "https://cutewallpaper.org/21/trello-backgrounds/Background-Scapes-by-Octopus-X-in-Environments-UE4-Marketplace.png",
      "https://cutewallpaper.org/21/trello-backgrounds/Introducing-Photo-Backgrounds-By-Unsplash-For-Trello.webp",
      "https://cutewallpaper.org/21/trello-backgrounds/Trello-dark-theme-style-overrides-%CB%87-GitHub.jpg",
      "https://cutewallpaper.org/21/trello-backgrounds/Trello-Backgrounds-14-best-free-sea-rock-cloud-and-blue-.jpg",
    ],

    recentboard: [{
        "description": "Lady with a red umbrella",
        "image-url": "https://i.imgur.com/pwpWaWu.jpg"
      },
      {
        "description": "Flowers and some fruits",
        "image-url": "https://i.imgur.com/KIPtISY.jpg"
      },
      {
        "description": "Beautiful scenery",
        "image-url": "https://i.imgur.com/2jMCqQ2.jpg"
      },
      {
        "description": "Some kind of bird",
        "image-url": "https://i.imgur.com/QFDRuAh.jpg"
      },
      {
        "description": "The attack of dragons",
        "image-url": "https://i.imgur.com/8yIIokW.jpg"
      }

    ],
    currentBoard: "board-1",
  },
  reducers: {

    editBoardName: (state, action) => {
      const currBoard = state.boards.find(
        (board) => board.id === action.payload.boardId
      );
      const idxBoard = state.boards.indexOf(currBoard);
      state.boards[idxBoard].name = action.payload.name;
    },
    editColumnTitle: (state, action) => {
      const currBoard = state.boards.find(
        (board) => board.id === action.payload.boardId
      );
      const idxBoard = state.boards.indexOf(currBoard);
      state.boards[idxBoard].columns[action.payload.columnPost].title =
        action.payload.title;
    },
    editCardTitle: (state, action) => {
      const currBoard = current(state).boards.find(
        (board) => board.id === action.payload.boardId
      );

      const idxBoard = current(state).boards.indexOf(currBoard);
      const currColumn = current(state).boards[idxBoard].columns.find(
        (column) => column.id === action.payload.columnId
      );


      const idxColumns = current(state).boards[idxBoard].columns.indexOf(currColumn);
      
      state.boards[idxBoard].columns[idxColumns].cards[
        action.payload.cardPost
      ].title = action.payload.title;
    },

    changeBoard: (state, action) => {
      state.currentBoard = action.payload.boardId;
    },
  },
});

export const {
  createBoard,
  createColumn,
  addCard,
  editColumnTitle,
  editBoardName,
  editCardTitle,
  starBoard,
  changeBoard,
} = boardSlice.actions;
export default boardSlice.reducer;