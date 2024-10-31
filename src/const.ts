export const bgColor = `#666b89`;

export const tldr = `TrackIME povides a unified framework that jointly performs point tracking and segmentation`;

export const video1 = "/wild1.mp4"
export const video2 = "/wild2.mp4"
export const video3 = "/wild3.mp4"
export const video4 = "/wild4.mp4"
export const video5 = "/wild5.mp4"
export const video6 = "/wild6.mp4"

export const jointvideo1 = "/joint1.mp4"
export const jointvideo2 = "/joint2.mp4"
export const jointvideo3 = "/joint3.mp4"
export const jointvideo4 = "/joint4.mp4"
export const jointvideo5 = "/joint5.mp4"
export const jointvideo6 = "/joint6.mp4"
export const jointvideo7 = "/joint7.mp4"
export const jointvideo8 = "/joint8.mp4"

export const workflow = "/workflow.png"

export const abstract = `Tracking points in video frames is essential for understanding video content. However, the task is fundamentally hindered by the computation demands for brute-force correspondence matching across the frames. As the current models down-sample the frame resolutions to mitigate this challenge, they fall short in accurately representing point trajectories due to information truncation. Instead, we address the challenge by pruning the search space for point tracking and let the model process only the important regions of the frames without down-sampling. Our first key idea is to identify the object instance and its trajectory over the frames, then prune the regions of the frame that do not contain the instance. Concretely, to estimate the instance’s trajectory, we track a group of points on the instance and aggregate their motion trajectories. Furthermore, to deal with the occlusions in complex scenes, we propose to compensate for the occluded points while tracking. To this end, we introduce a unified framework that jointly performs point tracking and segmentation, providing synergistic effects between the two tasks. For example, the segmentation results enable a tracking model to avoid the occluded points referring to the instance mask, and conversely, the improved tracking results can help to produce more accurate segmentation masks. Our framework can be easily incorporated with various tracking models, and we demonstrate its efficacy for enhanced point tracking throughout extensive experiments.`;