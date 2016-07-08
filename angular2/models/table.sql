create table orcl_tab(
    tab_type varchar(20),#SDDV Static Data Dictionary Views | DPV Dynamic Performance Views
    tab_name varchar(50),
    tab_desc varchar(50)
)

create table orcl_tab_col(
    tab_name int,#orcl_tab.tab_name
    col_name varchar(50),
    col_datatype varchar(50),
    col_desc varchar(1000)
    col_rel int #orcl_tab_col.id
)

create table orcl_par(
    id int,
    par_name varchar(20),
    par_ppy #属性名字
    par_desc varchar(1000)
)

create table orcl_event(
    id int
)