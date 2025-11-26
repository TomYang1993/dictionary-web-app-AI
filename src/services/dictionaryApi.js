const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const getWordDefinition = async (word) => {
    try {
        const response = await fetch(`${BASE_URL}/${word}`);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Word not found');
            }
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
