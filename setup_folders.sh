#!/bin/bash

# Navigate to your repository directory (adjust path as needed)
# cd /path/to/your/petergiordano/repository

# Create the workshop folders
mkdir -p problems_worth_solving
mkdir -p finding_your_early_customers
mkdir -p value_proposition_positioning_basics
mkdir -p market_entry_readiness

# Move existing ecp-activity-1.html to the correct folder (if it exists)
if [ -f "ecp-activity-1.html" ]; then
    mv ecp-activity-1.html finding_your_early_customers/
    echo "Moved ecp-activity-1.html to finding_your_early_customers/"
fi

echo "Created folders:"
echo "✓ problems_worth_solving/"
echo "✓ finding_your_early_customers/"
echo "✓ value_proposition_positioning_basics/"
echo "✓ market_entry_readiness/"
echo ""
echo "Next steps:"
echo "1. Add index.html files to each folder"
echo "2. Add main index.html to repository root"
echo "3. Commit and push to GitHub"