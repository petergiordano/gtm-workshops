// Generate a valid test Progress Code for Market Entry workshop
const testData = {
    version: 1,
    workshops: {
        day1: {
            problemStatement: "Development teams at fast-growing B2B SaaS companies struggle with API failures that impact customers before they can respond",
            scores: {
                urgency: 5,
                importance: 5,
                value: 5,
                marketGap: 4,
                accessibility: 4
            },
            evidence: {
                urgency: "API issues occur weekly, causing immediate customer impact",
                importance: "Each incident costs $50K+ in lost revenue and support time",
                value: "Teams willing to pay $10K+/month for predictive monitoring",
                marketGap: "Current tools only alert after failures occur",
                accessibility: "Can target through DevOps communities and AWS partnerships"
            }
        },
        day2_1: {
            common_needs: "Development teams who need to prevent API failures before customer impact",
            problem_urgency: "Weekly API issues costing $50K+ per incident in revenue and reputation",
            business_value: "80% reduction in API downtime, 90% faster incident response, $500K annual savings",
            basic_profile: "B2B SaaS companies, 100-1000 employees, modern cloud infrastructure, DevOps culture"
        },
        day2_2: {
            targetCustomer: "Development teams at fast-growing B2B SaaS companies (100-1000 employees) who manage critical API infrastructure and value reliability over cost",
            corePain: "API failures that impact customers and cause revenue loss before teams can respond",
            differentiators: [
                "AI-powered predictive failure detection before customer impact",
                "Automated root cause analysis with suggested fixes",
                "One-click integration with existing monitoring stack"
            ],
            values: [
                "Prevents 80% of API failures, reducing downtime costs by $500K annually",
                "Reduces MTTR from 2 hours to 15 minutes with automated diagnostics",
                "Deploy in under 1 hour without changing existing tools"
            ]
        }
    }
};

// Convert to JSON and base64
const jsonString = JSON.stringify(testData);
const base64 = btoa(jsonString);
const progressCode = `GSAP2025-${base64}`;

console.log('Generated Progress Code Length:', progressCode.length);
console.log('Progress Code:', progressCode);

// Save to file
const fs = require('fs');
fs.writeFileSync('/Users/petergiordano/Documents/GitHub/gtm-workshops/testing/test-code-market-entry-valid.txt', progressCode);