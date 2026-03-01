import { useState } from 'react';

export interface LeadData {
    name: string;
    phone: string;
    email: string;
    productOfInterest?: string;
    wantsTrialKit?: boolean;
}

export const useLeadSubmit = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const submitLead = async (data: LeadData) => {
        setLoading(true);
        setSuccess(false);
        setError(null);

        const webhookUrl = (import.meta as any).env?.VITE_N8N_WEBHOOK_URL || 'https://quynhnnn23410.app.n8n.cloud/webhook-test/cjgb-lead-capture';

        const payload = {
            ...data,
            lead_source: 'Landing Page',
            submitted_at: new Date().toISOString(),
        };

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error(`Submit failed with status: ${response.status}`);
            }

            setSuccess(true);
            return true;
        } catch (err: any) {
            console.error('Error submitting lead:', err);
            setError(err.message || 'Có lỗi xảy ra, vui lòng thử lại sau.');
            return false;
        } finally {
            setLoading(false);
        }
    };

    const resetStatus = () => {
        setSuccess(false);
        setError(null);
    }

    return { submitLead, loading, success, error, resetStatus };
};
