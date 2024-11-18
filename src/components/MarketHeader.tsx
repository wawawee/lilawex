import { Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MarketHeader() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
      <div>
        <h1 className="text-3xl font-bold">TOKEN/STOCK</h1>
        <p className="text-muted-foreground">Trade tokens for stocks seamlessly</p>
      </div>
      <Button variant="outline" className="gap-2 border-accent hover:bg-accent/10 hover:text-accent">
        <Wallet className="w-4 h-4" />
        Connect Wallet
      </Button>
    </div>
  );
}