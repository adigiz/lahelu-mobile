import { ResizeMode,Video } from 'expo-av';
import { useEffect,useRef } from 'react';
import { StyleSheet,View } from 'react-native';

interface VideoPlayerProps {
    uri: string;
    isPlaying: boolean;
}

export default function VideoPlayer({ uri, isPlaying }: VideoPlayerProps) {
    const video = useRef<Video>(null);

    useEffect(() => {
        if (video.current) {
            if (isPlaying) {
                video.current.playAsync();
            } else {
                video.current.pauseAsync();
            }
        }
    }, [isPlaying]);

    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{ uri: uri }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    }
});
