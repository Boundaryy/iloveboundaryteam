import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';

const LearningResults = () => {
    const [results, setResults] = useState([]);
    const router = useRouter();

    useEffect(() => {
        fetchResults();
    }, []);

    const fetchResults = async () => {
        try {
            const response = await axios.get('YOUR_BACKEND_API_URL/results');
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching results:', error);
        }
    };

    const handlePress = () => {
        router.push('child/training/resultcontent');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>학습 결과</Text>
                <Text style={styles.headerSubtitle}>최근 학습 결과를 확인해보세요.</Text>
            </View>
            {results.map((result, index) => (
                <TouchableOpacity key={index} onPress={handlePress} style={styles.resultItem}>
                    <View style={[styles.resultIcon, result.status === 'correct' ? styles.correct : styles.incorrect]} />
                    <View style={styles.resultContent}>
                        <Text style={styles.resultTitle}>{result.title}</Text>
                        <Text style={styles.resultDate}>{result.date} 상황 대처 학습 결과</Text>
                        <Text style={styles.resultSummary}>{result.summary}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    header: {
        alignItems: 'flex-start',
        marginBottom: 20,
        paddingTop: 60,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: '700',
        color: '#000',
    },
    headerSubtitle: {
        color: '#898989',
        fontSize: 14,
        margin: 8,
        fontWeight: '200',
    },
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    resultIcon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },
    resultContent: {
        flexGrow: 1,
    },
    resultTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
    },
    resultDate: {
        fontSize: 14,
        color: '#5772FF',
        marginTop: 4,
    },
    resultSummary: {
        fontSize: 14,
        color: '#4CAF50',
        marginTop: 4,
    },
    resultLink: {
        fontSize: 16,
        color: '#CCC',
    },
    correct: {
        backgroundColor: 'url("/check-circle.svg")', 
    },
    incorrect: {
        backgroundColor: 'url("/x-circle.svg")', 
    },
    resultImage: {
        width: 40,
        height: 40,
        marginRight: 10,
    },
});

export default LearningResults;
