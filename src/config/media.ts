/**
 * Auto-generated Media Assets from Pexels API
 * Project: ef-platform
 * Zero attribution clutter on UI (Enterprise Clean Standard)
 */

export interface PhotoAsset {
  id: string;
  url: string;
  alt: string;
  avg_color: string;
}

export interface VideoAsset {
  id: string;
  videoUrl: string;
  posterUrl: string;
  width: number;
  height: number;
}

export interface MediaConfig {
  caseStudyPhoto: PhotoAsset;
  editorialPhotos: PhotoAsset[];
  ambientVideo: VideoAsset;
}

export const mediaConfig: MediaConfig = {
  caseStudyPhoto: {
    "id": "2793473",
    "url": "https://images.pexels.com/photos/2793473/pexels-photo-2793473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "A stunning view of a futuristic subway station interior with dynamic light trails.",
    "avg_color": "#537691"
},
  editorialPhotos: [
    {
    "id": "373272",
    "url": "https://images.pexels.com/photos/373272/pexels-photo-373272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "A sleek and modern train station illuminated at night, showcasing vibrant architecture.",
    "avg_color": "#4F434C"
},
    {
    "id": "793428",
    "url": "https://images.pexels.com/photos/793428/pexels-photo-793428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "High angle view of a modern urban train station showcasing architectural details and cityscape.",
    "avg_color": "#676C6F"
},
    {
    "id": "36342227",
    "url": "https://images.pexels.com/photos/36342227/pexels-photo-36342227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "alt": "Close-up of a modern metal structure with industrial lights against blue sky.",
    "avg_color": "#395C58"
}
  ],
  ambientVideo: {
    "id": "18419649",
    "videoUrl": "https://videos.pexels.com/video-files/18419649/18419649-hd_1280_720_30fps.mp4",
    "posterUrl": "https://images.pexels.com/videos/18419649/3d-arcadian-audiovisual-cosmos-18419649.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200",
    "width": 1280,
    "height": 720
}
};
