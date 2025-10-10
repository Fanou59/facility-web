"use client";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";

interface ChangePasswordFormProps {
  userId: string;
  onSuccess: () => void;
}

export default function ChangePasswordForm({
  userId,
  onSuccess,
}: ChangePasswordFormProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (newPassword !== confirmPassword) {
      setError("Les nouveaux mots de passe ne correspondent pas");
      return;
    }

    if (newPassword.length < 8) {
      setError("Le nouveau mot de passe doit contenir au moins 8 caractères");
      return;
    }

    setIsLoading(true);

    try {
      await authClient.changePassword({
        currentPassword,
        newPassword,
      });

      alert("Mot de passe modifié avec succès");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      onSuccess();
    } catch (error: any) {
      setError(error.message || "Erreur lors du changement de mot de passe");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 border rounded-md bg-gray-50"
    >
      <h3 className="text-lg font-medium">Changer le mot de passe</h3>

      {error && <div className="text-red-600 text-sm">{error}</div>}

      <div>
        <label
          htmlFor="currentPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Mot de passe actuel
        </label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div>
        <label
          htmlFor="newPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Nouveau mot de passe
        </label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          minLength={8}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirmer le nouveau mot de passe
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          minLength={8}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 disabled:opacity-50"
        >
          {isLoading ? "Modification..." : "Changer le mot de passe"}
        </button>
        <button
          type="button"
          onClick={onSuccess}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Annuler
        </button>
      </div>
    </form>
  );
}
