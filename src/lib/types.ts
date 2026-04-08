export type GamePhase = 'START' | 'TUTORIAL' | 'TRANSITION' | 'MINI_GAME' | 'FINALE';

export type StandardBase = 'A' | 'T' | 'G' | 'C';
export type MutatedBase = 'N' | 'İ' | 'D' | 'B';
export type DNABaseType = StandardBase | MutatedBase;

export interface DraggableItem {
  id: string;
  type: DNABaseType;
}

export interface DroppableSlotData {
  id: string;
  expectedType: DNABaseType;
  isFilled: boolean;
  currentBaseId?: string;
  currentBaseType?: DNABaseType;
}