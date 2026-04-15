import { Ionicons } from '@expo/vector-icons';

export default function RatingStars(rating: number) {
  return [1, 2, 3, 4, 5].map(i => (
    <Ionicons
      key={i}
      name={i <= rating ? 'star' : 'star-outline'}
      size={10}
      color="#959f9e"
      style={{marginRight: 2}}
    />
  ));
}
