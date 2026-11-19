'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4">
      {currentPage > 1 ? (
        <Link
          href={createPageURL(currentPage - 1)}
          className="rounded-md border px-4 py-2 hover:bg-gray-100"
        >
          Previous
        </Link>
      ) : (
        <span className="rounded-md border px-4 py-2 text-gray-400 cursor-not-allowed">
          Previous
        </span>
      )}

      <span className="text-sm font-medium">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages ? (
        <Link
          href={createPageURL(currentPage + 1)}
          className="rounded-md border px-4 py-2 hover:bg-gray-100"
        >
          Next
        </Link>
      ) : (
        <span className="rounded-md border px-4 py-2 text-gray-400 cursor-not-allowed">
          Next
        </span>
      )}
    </div>
  );
}
