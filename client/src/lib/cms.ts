// Editorial Signal style: this boundary keeps the interface editorial while content remains replaceable.
import { faqs, navigation, plans, projects, services, siteSettings, stats, team } from '@/data/siteContent';

export const cms = {
  async getSiteSettings() { return siteSettings; },
  async getNavigation() { return navigation; },
  async getProjects() { return projects; },
  async getServices() { return services; },
  async getPlans() { return plans; },
  async getFaqs() { return faqs; },
  async getStats() { return stats; },
  async getTeam() { return team; },
};

export type CmsAdapter = typeof cms;
// Future adapter contract: map WordPress REST/GraphQL responses into these same methods.
