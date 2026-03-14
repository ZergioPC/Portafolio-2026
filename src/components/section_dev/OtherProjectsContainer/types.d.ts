export type GithubQueryParams = {
  sort?: "created" | "updated" | "pushed" | "full_name";
  direction?: "asc" | "desc";
  per_page?: number;
  page?: number;
};

export type GithubRepo = {
    id:                           number;
    node_id:                      string;
    name:                         string;
    full_name:                    string;
    private:                      boolean;
    owner:                        Owner;
    html_url:                     string;
    description:                  string;
    fork:                         boolean;
    url:                          string;
    forks_url:                    string;
    keys_url:                     string;
    collaborators_url:            string;
    teams_url:                    string;
    hooks_url:                    string;
    issue_events_url:             string;
    events_url:                   string;
    assignees_url:                string;
    branches_url:                 string;
    tags_url:                     string;
    blobs_url:                    string;
    git_tags_url:                 string;
    git_refs_url:                 string;
    trees_url:                    string;
    statuses_url:                 string;
    languages_url:                string;
    stargazers_url:               string;
    contributors_url:             string;
    subscribers_url:              string;
    subscription_url:             string;
    commits_url:                  string;
    git_commits_url:              string;
    comments_url:                 string;
    issue_comment_url:            string;
    contents_url:                 string;
    compare_url:                  string;
    merges_url:                   string;
    archive_url:                  string;
    downloads_url:                string;
    issues_url:                   string;
    pulls_url:                    string;
    milestones_url:               string;
    notifications_url:            string;
    labels_url:                   string;
    releases_url:                 string;
    deployments_url:              string;
    created_at:                   Date;
    updated_at:                   Date;
    pushed_at:                    Date;
    git_url:                      string;
    ssh_url:                      string;
    clone_url:                    string;
    svn_url:                      string;
    homepage:                     null | string;
    size:                         number;
    stargazers_count:             number;
    watchers_count:               number;
    language:                     Language;
    has_issues:                   boolean;
    has_projects:                 boolean;
    has_downloads:                boolean;
    has_wiki:                     boolean;
    has_pages:                    boolean;
    has_discussions:              boolean;
    forks_count:                  number;
    mirror_url:                   null;
    archived:                     boolean;
    disabled:                     boolean;
    open_issues_count:            number;
    license:                      License | null;
    allow_forking:                boolean;
    is_template:                  boolean;
    web_commit_signoff_required:  boolean;
    has_pull_requests:            boolean;
    pull_request_creation_policy: PullRequestCreationPolicy;
    topics:                       string[];
    visibility:                   Visibility;
    forks:                        number;
    open_issues:                  number;
    watchers:                     number;
    default_branch:               DefaultBranch;
}

export enum DefaultBranch {
    Main = "main",
    Master = "master",
}

export enum Language {
    Astro = "Astro",
    HTML = "HTML",
    JavaScript = "JavaScript",
    Python = "Python",
    CSS = "CSS",
    GDScript = "GDScript"
}

export type License = {
    key:     string;
    name:    string;
    spdx_id: string;
    url:     null | string;
    node_id: string;
}

export type Owner = {
    login:               Login;
    id:                  number;
    node_id:             NodeID;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       FollowingURL;
    gists_url:           GistsURL;
    starred_url:         StarredURL;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          EventsURL;
    received_events_url: string;
    type:                Type;
    user_view_type:      Visibility;
    site_admin:          boolean;
}

export enum EventsURL {
    HTTPSAPIGithubCOMUsersZergioPCEventsPrivacy = "https://api.github.com/users/ZergioPC/events{/privacy}",
}

export enum FollowingURL {
    HTTPSAPIGithubCOMUsersZergioPCFollowingOtherUser = "https://api.github.com/users/ZergioPC/following{/other_user}",
}

export enum GistsURL {
    HTTPSAPIGithubCOMUsersZergioPCGistsGistID = "https://api.github.com/users/ZergioPC/gists{/gist_id}",
}

export enum Login {
    ZergioPC = "ZergioPC",
}

export enum NodeID {
    UKgDOCQ19Iw = "U_kgDOCQ19Iw",
}

export enum StarredURL {
    HTTPSAPIGithubCOMUsersZergioPCStarredOwnerRepo = "https://api.github.com/users/ZergioPC/starred{/owner}{/repo}",
}

export enum Type {
    User = "User",
}

export enum Visibility {
    Public = "public",
}

export enum PullRequestCreationPolicy {
    All = "all",
}
