class GitHub {
    constructor() {
        this.client_id = "63caded2272c92716b85";
        this.client_secret = "1d87aa5d6e58228dd8969139932eef6f1d5a8f53";
        this.repos_count = 10;
        this.repos_sort = "created: asc";
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos,
        };
    }
}
