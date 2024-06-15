import { defineStore } from "pinia";

interface IState {
  result: string;
  isLoading: boolean;
}

export const useResultsStore = defineStore("results", {
  state: (): IState => ({
    result: "",
    isLoading: false
  }),
  actions: {
    async uploadText(text: string) {
      this.isLoading = true;

      try {
        const response = await fetch("http://localhost:8085/api/simplify_text", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ text })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const res = await response.json();

        if (res) {
          this.result = res.text;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    },

    async uploadFile(file: any) {
      this.isLoading = true;

      const formData = new FormData();
      formData.append("file", file.file);

      try {
        const response = await fetch("http://localhost:8085/api/simplify_file", {
          method: "POST",
          body: formData
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const res = await response.json();

        if (res) {
          this.result = res.text;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.isLoading = false;
      }
    }
  }
});

