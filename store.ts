import {create} from 'zustand';
import {FormData} from '@/components/my-form'

// Define the type for the results object


// Define the store's state and actions
type Store = {
  results: FormData;
  setResults: (newResults: FormData) => void;
};

// Create the Zustand store
export const useStore = create<Store>((set) => ({
  results: { step: 1 },
  setResults: (newResults) => set({ results: newResults }),
}));

// // Example usage of the store
// const updateResults = () => {
//   const { setResults } = useStore.getState();

//   const newResults: Results = {
//     score: 100,
//     message: 'You passed!',
//   };

//   // Update the results object
//   setResults(newResults);
// };


