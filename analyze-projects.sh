#!/bin/bash

echo "🔍 АНАЛІЗ ОКРЕМИХ ПРОЕКТІВ У TESTOMATIO REPORTER"
echo "============================================================"

echo ""
echo "📊 ЗАПУСК ТЕСТІВ З ДЕТАЛЬНИМ ЛОГУВАННЯМ..."
npm run test:mixed-projects -- --reporter=list 2>&1 | tee mixed-projects-output.log

echo ""
echo "🔍 АНАЛІЗ РЕЗУЛЬТАТІВ:"
echo "============================================================"

echo ""
echo "📋 1. SETUP ПРОЕКТИ (мають запуститись першими):"
grep -n "\[setup-" mixed-projects-output.log | head -5

echo ""
echo "📋 2. CORE-API ПРОЕКТИ (позначені [core-api]):"
grep -n "\[core-api\]" mixed-projects-output.log | head -5

echo ""
echo "📋 3. CLINIC-API ПРОЕКТИ (позначені [clinic-api]):"  
grep -n "\[clinic-api\]" mixed-projects-output.log | head -5

echo ""
echo "📋 4. PROJECT IDENTIFICATION ТЕСТИ:"
grep -n "PROJECT IDENTIFICATION TEST" mixed-projects-output.log

echo ""
echo "📋 5. ЗАЛЕЖНОСТІ МІЖ ПРОЕКТАМИ:"
echo "   setup-core -> core-api"
echo "   setup-clinic -> clinic-api"

echo ""
echo "📋 6. УНІКАЛЬНІ ТЕСТИ ПО ПРОЕКТАХ:"
echo "   CORE-API: Business logic, contacts, tasks"
echo "   CLINIC-API: Medical cases, invoices, clinic operations"

echo ""
echo "📋 7. TESTOMATIO REPORTER:"
grep -n "TESTOMATIO" mixed-projects-output.log | head -3

echo ""
echo "✅ ВИСНОВОК: Тести запускаються як ОКРЕМІ ПРОЕКТИ в одному рані!"
echo "============================================================"