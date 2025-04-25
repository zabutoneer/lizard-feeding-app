import { FeedingForm } from './FeedingForm';
import type { FeedingFormData } from './types';

interface FeedingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lizardName: string;
}

export function FeedingModal({ isOpen, onClose, lizardName }: FeedingModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (data: FeedingFormData) => {
    console.log('送信されたデータ:', data);  // 開発用ログ
    // TODO: ここでデータを保存する処理を追加
    onClose();  // 保存後にモーダルを閉じる
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-1/2 min-w-[500px]">
        {/* ヘッダー */}
        <div className="bg-teal-500 p-4 rounded-t-xl flex justify-between items-center">
          <h2 className="text-white font-bold">{lizardName}の餌やり記録</h2>
          <button onClick={onClose} className="text-white">×</button>
        </div>

        {/* フォーム */}
        <div className="p-4">
          <FeedingForm 
            onSubmit={handleSubmit}
            onCancel={onClose}
          />
        </div>
      </div>
    </div>
  );
}
