export class socialPost{
    postId: string;
    posterName: string;
    postTimestamp: Date;
    mediaImage: boolean;
    mediaVideo: boolean;
    mediaLink: boolean;
    mediaFile: boolean;
    mediaPost: boolean;
    postText: string;
    postLikes: number;
    postComments: number;
    postReposts: number;
    postBookmarked: boolean;

    constructor(){
        this.postId = "";
        this.posterName = "";
        this.postTimeStamp = new Date();
        this.mediaImage = false;
        this.mediaVideo = false;
        this.lmediaLink = false;
        this.lmediaFile = false;
        this.mediaPost = false;
        this.postText = "";
        this.postLikes = 0;
        this.postComments = 0;
        this.postReposts = 0;
        this.postBookmarked = false;
    }
}
