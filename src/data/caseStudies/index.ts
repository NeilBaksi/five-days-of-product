import type { CaseStudy } from '../../types'
import { AESOP } from './aesop'
import { CONNFLIX } from './connflix'

export const CASE_STUDIES: CaseStudy[] = [AESOP, CONNFLIX]
export const getCaseStudy = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug)
