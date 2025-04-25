export type FeedingType = 
  | 'cricket'     // コオロギ
  | 'mealworm'    // ミルワーム
  | 'superworm'   // スーパーワーム
  | 'vegetable'   // 野菜
  | 'fruit'       // 果物
  | 'pellet'      // ペレット
  | 'supplement'; // サプリメント

export const FEEDING_TYPE_LABELS: Record<FeedingType, string> = {
  cricket: 'コオロギ',
  mealworm: 'ミルワーム',
  superworm: 'スーパーワーム',
  vegetable: '野菜',
  fruit: '果物',
  pellet: 'ペレット',
  supplement: 'サプリメント'
};

export interface FeedingFormData {
  type: FeedingType;
  amount: number;    // 餌の量（匹数や個数）
  notes?: string;    // メモ（任意）
  date: string;      // 給餌日（YYYY-MM-DD形式）
}

export interface FeedingRecord extends FeedingFormData {
  id: string;
  lizardId: number;  // どのトカゲの記録か
  createdAt: string; // 記録作成日時
}
