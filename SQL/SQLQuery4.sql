select e.empno,e.ename,j.startdate,j.enddate,j.chgdesc                    --------------1
from emp e
full outer join
jobhist j
on(e.empno=j.empno)
where e.empno in (select empno from emp union select empno from jobhist)
order by j.startdate

select e.empno,e.ename,j.startdate,j.enddate,j.chgdesc,j.comm                    --------------1
from emp e
full outer join
jobhist j
on(e.empno=j.empno)
where j.enddate is not null and e.empno in  (select empno 
from emp union select empno from jobhist)
order by j.startdate

