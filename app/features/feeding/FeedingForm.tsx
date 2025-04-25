// app/features/feeding/feedingForm.tsx
import {
    Box,
    Button,
    VStack,
    Separator,
    Field,
    Select,
    NumberInput,
    Input,
    createListCollection,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FEEDING_TYPE_LABELS } from './types';
import type { FeedingFormData, FeedingType } from './types';

interface FeedingFormProps {
    onSubmit: (data: FeedingFormData) => void;
    onCancel: () => void;
}

const feedingTypes = createListCollection({
    items: Object.entries(FEEDING_TYPE_LABELS).map(([value, label]) => ({
        label,
        value,
    })),
});

export function FeedingForm({ onSubmit, onCancel }: FeedingFormProps) {
    const [formData, setFormData] = useState<FeedingFormData>({
        type: 'cricket',
        amount: 1,
        notes: '',
        date: new Date().toISOString().split('T')[0], // 今日の日付をYYYY-MM-DD形式で
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <Box as="form" onSubmit={handleSubmit}>
            <VStack gap={4}>
                {/* 餌の種類 */}
                <Field.Root>
                    <Field.Label>餌の種類</Field.Label>
                    <Select.Root
                        collection={feedingTypes}
                        value={[formData.type]}
                        onValueChange={(e) => setFormData({ ...formData, type: e.value[0] as FeedingType })}
                    >
                        <Select.HiddenSelect />
                        <Select.Control>
                            <Select.Trigger>
                                <Select.ValueText placeholder="餌の種類を選択" />
                            </Select.Trigger>
                            <Select.IndicatorGroup>
                                <Select.Indicator />
                            </Select.IndicatorGroup>
                        </Select.Control>
                        <Select.Content>
                            {feedingTypes.items.map((item) => (
                                <Select.Item key={item.value} item={item}>
                                    {item.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Root>
                </Field.Root>
                <Separator />

                {/* 餌の量 */}
                <Field.Root>
                    <Field.Label>量</Field.Label>
                    <NumberInput.Root>
                        <NumberInput.Input
                            min={1}
                            value={formData.amount}
                            onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                            textAlign="right"
                        />
                    </NumberInput.Root>
                </Field.Root>
                <Separator />

                {/* 給餌日 */}
                <Field.Root>
                    <Field.Label>給餌日</Field.Label>
                    <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                </Field.Root>
                <Separator />

                {/* ボタン */}
                <Box display="flex" gap={4} w="100%" justifyContent="flex-end">
                    <Button variant="outline" onClick={onCancel}>
                        キャンセル
                    </Button>
                    <Button type="submit" colorScheme="teal">
                        保存
                    </Button>
                </Box>
            </VStack>
        </Box>
    );
}