import { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface VideoPlayerProps {
    uri: string;
    isPlaying: boolean;
}

export default function VideoPlayer({ uri, isPlaying }: VideoPlayerProps) {
    const video = useRef<Video>(null);
    const [status, setStatus] = useState<AVPlaybackStatus | null>(null);

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
                onPlaybackStatusUpdate={(status) => setStatus(status)}
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
