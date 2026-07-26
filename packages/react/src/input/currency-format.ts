const DEFAULT_DECIMAL_SCALE = 2;

const stripCommas = (value: string) => value.replaceAll(',', '');

export function formatCurrencyInputNumber(
  amount?: number,
  locale = 'en-GB',
  decimalScale = DEFAULT_DECIMAL_SCALE,
  minFractionDigits = 0
) {
  if (amount === undefined || amount === null) return '';

  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: minFractionDigits,
    maximumFractionDigits: decimalScale,
  }).format(amount);
}

export function formatCurrencyInputString(
  value: string,
  locale = 'en-GB',
  decimalScale = DEFAULT_DECIMAL_SCALE
) {
  const sanitized = stripCommas(value);
  if (sanitized === '') return '';

  const hasDecimal = sanitized.includes('.');
  const [integerRaw, decimalRaw = ''] = sanitized.split('.');

  const integerDigits = integerRaw.replace(/\D/g, '');
  const formattedInteger = integerDigits
    ? new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(Number(integerDigits))
    : '';

  if (!hasDecimal) return formattedInteger;

  const decimalDigits = decimalRaw.replace(/\D/g, '').slice(0, decimalScale);
  if (formattedInteger === '' && decimalDigits === '') return '.';

  const integerPart = formattedInteger === '' ? '0' : formattedInteger;
  return `${integerPart}.${decimalDigits}`;
}

export function parseCurrencyNumber(value?: number | string) {
  if (value === undefined || value === null || value === '') return undefined;
  const parsed = typeof value === 'number' ? value : Number(value);
  return Number.isNaN(parsed) ? undefined : parsed;
}

function decimalCount(rawValue: string, decimalScale: number) {
  if (!rawValue.includes('.')) return 0;
  return Math.min(rawValue.split('.')[1]?.length ?? 0, decimalScale);
}

export function normalizeCurrencyRaw(rawInput: string, decimalScale: number) {
  const sanitized = stripCommas(rawInput);
  const decimals = decimalCount(sanitized, decimalScale);

  if (sanitized === '' || sanitized === '.') {
    return { sanitized, parsed: undefined, decimals: 0 };
  }

  const parsed = Number(sanitized);
  return { sanitized, parsed: Number.isNaN(parsed) ? undefined : parsed, decimals };
}

export function clampCurrencyValue(nextValue: number, min?: number, max?: number) {
  const minValue = parseCurrencyNumber(min);
  const maxValue = parseCurrencyNumber(max);

  const withMin = minValue === undefined ? nextValue : Math.max(nextValue, minValue);
  return maxValue === undefined ? withMin : Math.min(withMin, maxValue);
}

export const DEFAULT_CURRENCY_DECIMAL_SCALE = DEFAULT_DECIMAL_SCALE;
