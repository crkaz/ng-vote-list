import { Component, OnInit } from "@angular/core";

const N_IDEAS: number = 3;
const LOREM_DESC: string =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.";
const AUTHOR: string = "Zak Catherall";
const DATE = new Date().toLocaleDateString();

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  ideas: any[] = [];
  selectedIdea: any = null;

  ngOnInit(): void {
    for (let i = 0; i < N_IDEAS; i += 1) {
      let idea = {
        id: i,
        title: "Idea " + i,
        description: LOREM_DESC,
        author: AUTHOR,
        date: DATE,
        votes: 0,
        selected: false
      };
      this.ideas.push(idea);
    }
    this.sortIdeasDescendingVotes();
  }

  vote(idea, upOrDown): void {
    if (upOrDown === "up") {
      idea.votes += 1;
    } else {
      idea.votes -= 1;
    }
    this.sortIdeasDescendingVotes();
  }

  sortIdeasDescendingVotes(): void {
    this.ideas.sort((a, b) => (a.votes < b.votes ? 1 : -1));
  }

  selectIdea(idea: any): void {
    this.selectedIdea ? (this.selectIdea.selected = false) : null;
    this.selectIdea = idea;
    this.selectIdea.selected = true;
  }
}
