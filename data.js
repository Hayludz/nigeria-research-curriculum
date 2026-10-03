/* Content for the Nigeria Research Curriculum.
   Topic shape: id, title, level, summary, know[], g[] (global videos), n[] (Nigeria videos), r[] (reading and tools)
   Video entries are [label, YouTube search query]. They open a live YouTube search so links never go stale. */

window.TRACKS = [
  {
    id: "foundations",
    title: "Research foundations",
    blurb: "How research thinks: questions, literature, frameworks and proposals.",
    topics: [
      {
        id: "paradigms",
        title: "What research is: paradigms and philosophy",
        level: "Start here",
        summary: "Every method rests on assumptions about knowledge. Knowing them lets you defend your choices to supervisors and reviewers.",
        know: [
          "Positivism, interpretivism, critical theory and pragmatism, and the methods each one favours.",
          "Ontology (what is real) and epistemology (how we know) in plain terms.",
          "Deductive versus inductive reasoning, and when to use each.",
          "Basic, applied, operational and implementation research are different jobs with different outputs."
        ],
        g: [
          ["Research paradigms explained", "research paradigms positivism interpretivism pragmatism explained"],
          ["Ontology and epistemology for researchers", "ontology epistemology research methodology explained"]
        ],
        n: [["Research methodology lecture for Nigerian postgraduate students", "research methodology lecture Nigerian university postgraduate"]],
        r: [["Research Methods Knowledge Base", "https://conjointly.com/kb/"]]
      },
      {
        id: "question",
        title: "Framing a researchable question",
        level: "Start here",
        summary: "A weak question cannot be rescued by good methods. Learn to narrow a topic into one answerable question.",
        know: [
          "FINER: is the question Feasible, Interesting, Novel, Ethical and Relevant?",
          "PICO for interventions, PEO for exposures, SPIDER for qualitative work, PCC for scoping reviews.",
          "Turning a broad problem (for example maternal deaths) into a specific question with a population, setting and outcome.",
          "Objectives are verbs you can measure: determine, compare, explore, describe."
        ],
        g: [
          ["Developing a research question with PICO", "how to develop a research question PICO FINER"],
          ["Research gap and problem statement", "how to write research problem statement and identify research gap"]
        ],
        n: [["Choosing a research topic as a Nigerian student", "how to choose research topic project Nigeria university"]],
        r: [["PICO explained (Cochrane Training)", "https://training.cochrane.org/handbook"]]
      },
      {
        id: "litsearch",
        title: "Searching and reading the literature",
        level: "Start here",
        summary: "Efficient literature searching saves months. Move from random Googling to structured, repeatable searches.",
        know: [
          "Core databases: PubMed/MEDLINE, Embase, Scopus, Web of Science, AJOL, Google Scholar, plus subject databases like ERIC and EconLit.",
          "Boolean operators, truncation, phrase search and MeSH terms.",
          "Grey literature: theses, government reports, WHO and NBS publications, conference abstracts.",
          "Read in layers: title, abstract, conclusions, then methods. Keep notes in a reference manager."
        ],
        g: [
          ["PubMed search tutorial with MeSH", "PubMed tutorial MeSH Boolean search strategy"],
          ["How to read a scientific paper", "how to read a scientific paper efficiently"]
        ],
        n: [["Searching African Journals Online and local databases", "African Journals Online AJOL how to search journals"], ["Literature search workshop Nigeria", "literature search workshop Nigeria university library"]],
        r: [["PubMed", "https://pubmed.ncbi.nlm.nih.gov/"], ["African Journals Online", "https://www.ajol.info/"], ["OpenAlex", "https://openalex.org/"]]
      },
      {
        id: "frameworks",
        title: "Theoretical and conceptual frameworks",
        level: "Core",
        summary: "Frameworks explain why variables relate and guide your analysis. Examiners in Nigerian universities check this chapter closely.",
        know: [
          "Theory versus theoretical framework versus conceptual framework: what each is and is not.",
          "Health examples: Health Belief Model, PRECEDE-PROCEED, Andersen model, three delays model for maternal care.",
          "Implementation frameworks: CFIR and RE-AIM.",
          "Map every variable in your instrument back to a framework construct."
        ],
        g: [
          ["Theoretical vs conceptual framework", "theoretical framework vs conceptual framework explained"],
          ["Implementation science frameworks CFIR RE-AIM", "implementation science frameworks CFIR RE-AIM explained"]
        ],
        n: [["Writing a conceptual framework for a Nigerian thesis", "how to write theoretical framework thesis Nigeria"]],
        r: [["CFIR guide", "https://cfirguide.org/"]]
      },
      {
        id: "proposal",
        title: "Writing a research proposal or protocol",
        level: "Core",
        summary: "A proposal is a plan you can be held to. Get approval, funding and a smooth study by writing it well.",
        know: [
          "Standard parts: background, problem statement, aim and objectives, methods, analysis plan, ethics, timeline, budget.",
          "Justify sample size, tools and analysis in the text, not just state them.",
          "SPIRIT is the guideline for trial protocols. PRISMA-P is for systematic review protocols.",
          "A Gantt chart and a realistic budget show reviewers you can deliver."
        ],
        g: [
          ["How to write a research proposal", "how to write a research proposal step by step"],
          ["Writing a clinical trial protocol SPIRIT", "SPIRIT guideline writing trial protocol"]
        ],
        n: [["Research proposal writing for Nigerian ethics committees", "research proposal writing workshop Nigeria ethics"]],
        r: [["SPIRIT statement", "https://www.spirit-statement.org/"]]
      }
    ]
  },
  {
    id: "design",
    title: "Study designs and methods",
    blurb: "Pick the right design, sample correctly, and collect data that can answer your question.",
    topics: [
      {
        id: "crosssectional",
        title: "Descriptive and cross-sectional studies",
        level: "Start here",
        summary: "The most common design in Nigerian student and clinical research. Great for prevalence, weak for cause and effect.",
        know: [
          "Prevalence, point and period, and why cross-sectional studies cannot show temporality.",
          "Sampling frame, response rate and non-response bias.",
          "Report with STROBE for cross-sectional studies.",
          "Hospital-based samples are not community prevalence. State this limitation plainly."
        ],
        g: [
          ["Cross-sectional study design explained", "cross-sectional study design explained epidemiology"],
          ["Types of study designs overview", "types of epidemiological study designs overview"]
        ],
        n: [["Community-based cross-sectional study in Nigeria", "community based cross sectional study Nigeria methodology"]],
        r: [["STROBE statement", "https://www.strobe-statement.org/"]]
      },
      {
        id: "cohortcc",
        title: "Cohort and case-control studies",
        level: "Core",
        summary: "Observational designs for risk factors and outcomes over time. Know their biases before you choose one.",
        know: [
          "Cohort: follow exposed and unexposed groups. Gives incidence and relative risk.",
          "Case-control: efficient for rare outcomes. Gives odds ratios. Selection of controls is the key risk.",
          "Confounding, selection bias, recall bias and information bias.",
          "Matched designs and how to analyse them."
        ],
        g: [
          ["Cohort vs case-control studies", "cohort study vs case control study explained"],
          ["Bias and confounding in epidemiology", "bias confounding epidemiology explained"]
        ],
        n: [["Case-control study design lecture Nigeria", "case control study design lecture Nigeria public health"]],
        r: [["Catalog of Bias", "https://catalogofbias.org/"]]
      },
      {
        id: "rct",
        title: "Randomised controlled trials",
        level: "Advanced",
        summary: "The strongest design for testing interventions. Demands careful randomisation, blinding, registration and regulatory approval.",
        know: [
          "Random sequence generation, allocation concealment and blinding are three different safeguards.",
          "Intention-to-treat versus per-protocol analysis.",
          "Cluster and pragmatic trials suit community and health-system interventions.",
          "Register before enrolment (PACTR or ClinicalTrials.gov) and report with CONSORT."
        ],
        g: [
          ["Randomised controlled trials explained", "randomised controlled trial design explained"],
          ["Cluster randomised trials", "cluster randomised trial design analysis"]
        ],
        n: [["Conducting clinical trials in Nigeria", "clinical trials in Nigeria NAFDAC ethics registration"]],
        r: [["Pan African Clinical Trials Registry", "https://pactr.samrc.ac.za/"], ["CONSORT and SPIRIT", "https://www.consort-spirit.org/"]]
      },
      {
        id: "implementation",
        title: "Quasi-experimental, implementation and operational research",
        level: "Advanced",
        summary: "Evaluate programmes and policies when randomisation is not possible. Highly relevant to Nigerian health systems and NGOs.",
        know: [
          "Before-after, controlled before-after, interrupted time series and difference-in-differences.",
          "Hybrid effectiveness-implementation designs.",
          "Operational research asks how to make existing programmes work better.",
          "Report with TREND or StaRI, and describe the context in detail."
        ],
        g: [
          ["Quasi-experimental designs", "quasi-experimental study designs interrupted time series difference in differences"],
          ["Implementation research basics", "implementation research basics for health programmes"]
        ],
        n: [["Operational research in Nigerian health programmes", "operational research health programme Nigeria SORT IT"]],
        r: [["TDR implementation research toolkit", "https://tdr.who.int/"]]
      },
      {
        id: "qualitative",
        title: "Qualitative research",
        level: "Core",
        summary: "Explore meaning, experience and context. Rigour comes from method and transparency, not from numbers.",
        know: [
          "Interviews, focus group discussions, observation and document analysis.",
          "Phenomenology, grounded theory, ethnography and case study.",
          "Purposive sampling, data saturation or information power, reflexivity.",
          "Thematic analysis step by step, trustworthiness criteria, and reporting with COREQ or SRQR."
        ],
        g: [
          ["Qualitative research methods overview", "qualitative research methods overview interviews focus groups"],
          ["Thematic analysis Braun and Clarke", "thematic analysis Braun and Clarke tutorial"]
        ],
        n: [["Qualitative research in Nigerian communities", "qualitative research Nigeria focus group discussion community"]],
        r: [["COREQ checklist (EQUATOR)", "https://www.equator-network.org/?s=COREQ"], ["NVivo and free tools overview", "https://www.taguette.org/"]]
      },
      {
        id: "mixed",
        title: "Mixed methods research",
        level: "Advanced",
        summary: "Combine numbers and narratives so each strengthens the other. Common in policy and programme evaluation.",
        know: [
          "Convergent, explanatory sequential and exploratory sequential designs.",
          "Integration is the point. Side-by-side reporting without integration is not mixed methods.",
          "Joint displays help readers see how findings connect.",
          "Plan time and skills for both strands."
        ],
        g: [["Mixed methods designs explained", "mixed methods research designs convergent explanatory exploratory"]],
        n: [["Mixed methods in Nigerian health research", "mixed methods study Nigeria health systems research"]],
        r: [["GRAMMS reporting guide", "https://www.equator-network.org/?s=GRAMMS"]]
      },
      {
        id: "survey",
        title: "Survey and questionnaire design",
        level: "Core",
        summary: "A badly worded item produces confident nonsense. Design, pretest and validate instruments before collecting data.",
        know: [
          "Clear, single-barrelled, unbiased questions. Avoid jargon and double negatives.",
          "Use validated scales where they exist and adapt them with permission.",
          "Pretest with a small group from the target population, then revise.",
          "Reliability (Cronbach alpha) and validity (content, construct) evidence."
        ],
        g: [
          ["Questionnaire design best practices", "questionnaire design best practices survey research"],
          ["Cronbach alpha and scale validation", "Cronbach alpha scale validation explained"]
        ],
        n: [["Translating and validating questionnaires in Hausa Yoruba Igbo", "questionnaire translation validation Hausa Yoruba Igbo research"]],
        r: [["COSMIN guidance on measurement", "https://www.cosmin.nl/"]]
      },
      {
        id: "sampling",
        title: "Sampling and sample size",
        level: "Core",
        summary: "Who you study and how many decide whether your findings can be trusted. Do the calculation, then justify it.",
        know: [
          "Probability sampling: simple random, systematic, stratified, cluster, multistage. Non-probability: purposive, snowball, convenience.",
          "Design effect for cluster surveys and why DHS-style surveys need weights.",
          "Sample size formulas for prevalence, comparing two groups and correlation. Tools: OpenEpi, G*Power, Stata and R.",
          "Add an allowance for non-response and say how you chose the expected prevalence and effect size."
        ],
        g: [
          ["Sample size calculation explained", "sample size calculation explained prevalence study"],
          ["Sampling methods in research", "sampling techniques probability non-probability explained"]
        ],
        n: [["Sample size and multistage sampling in Nigeria", "sample size calculation multistage sampling Nigeria study"]],
        r: [["OpenEpi", "https://www.openepi.com/"]]
      }
    ]
  },
  {
    id: "evidence",
    title: "Systematic reviews and evidence synthesis",
    blurb: "The full craft of review work, from protocol to GRADE. Built around how reviews are done and judged.",
    topics: [
      {
        id: "reviewtypes",
        title: "Types of reviews and choosing between them",
        level: "Start here",
        summary: "Narrative, scoping, rapid, systematic, umbrella and realist reviews answer different questions. Choose before you search.",
        know: [
          "Systematic review: answers a focused question with a reproducible method.",
          "Scoping review: maps the extent and nature of evidence, no effect estimate.",
          "Rapid review: streamlined methods for urgent decisions.",
          "Umbrella review synthesises reviews. Realist review explains what works for whom and why."
        ],
        g: [
          ["Systematic review vs scoping review vs narrative review", "systematic review vs scoping review vs narrative review"],
          ["Types of evidence synthesis", "types of literature reviews evidence synthesis explained"]
        ],
        n: [["Systematic review training for Nigerian researchers", "systematic review training workshop Nigeria"]],
        r: [["Cochrane Handbook", "https://training.cochrane.org/handbook"], ["JBI manual for evidence synthesis", "https://synthesismanual.jbi.global/"]]
      },
      {
        id: "srprotocol",
        title: "Protocol and registration",
        level: "Core",
        summary: "Write the plan first and register it publicly. This protects you from bias and from duplicate work.",
        know: [
          "Eligibility criteria, search plan, screening process, risk of bias tool, outcomes and synthesis plan, all fixed in advance.",
          "Write the protocol using PRISMA-P.",
          "Register on PROSPERO (health outcomes) or OSF. Scoping reviews can register on OSF.",
          "Record and explain any deviation from the protocol."
        ],
        g: [
          ["Registering a systematic review on PROSPERO", "PROSPERO registration tutorial systematic review"],
          ["Writing a systematic review protocol PRISMA-P", "systematic review protocol PRISMA-P how to write"]
        ],
        n: [["Systematic review protocol development Nigeria", "systematic review protocol registration Nigerian researchers"]],
        r: [["PROSPERO", "https://www.crd.york.ac.uk/prospero/"], ["Open Science Framework", "https://osf.io/"], ["PRISMA statement", "https://www.prisma-statement.org/"]]
      },
      {
        id: "srsearch",
        title: "Building a systematic search strategy",
        level: "Core",
        summary: "A missed study can change the answer. Design searches across several databases and report them so others can repeat them.",
        know: [
          "Break the question into concepts, then combine synonyms and controlled vocabulary with OR and AND.",
          "Search at least two to three databases (MEDLINE, Embase, CENTRAL, Scopus, Web of Science, CINAHL, AJOL) and trial registries.",
          "Add citation chasing and grey literature. For Nigerian topics, include AJOL and local theses.",
          "Document every search with date, database, string and result count. Report using PRISMA-S."
        ],
        g: [
          ["Systematic review search strategy tutorial", "systematic review search strategy tutorial Boolean MeSH Embase"],
          ["PRISMA-S reporting searches", "PRISMA-S reporting literature searches"]
        ],
        n: [["Searching for evidence on Nigerian topics", "systematic review search African databases AJOL Nigeria"]],
        r: [["PRISMA-S", "https://www.prisma-statement.org/prisma-search"], ["Polyglot search translator", "https://sr-accelerator.com/#/polyglot"]]
      },
      {
        id: "screening",
        title: "Screening, selection and data extraction",
        level: "Core",
        summary: "Two reviewers, clear rules and a piloted form make a review credible.",
        know: [
          "Deduplicate, then screen titles and abstracts, then full texts, with at least two independent reviewers.",
          "Pilot the screening and extraction forms and calibrate before starting.",
          "Tools: Rayyan, Covidence, ASReview, Zotero for deduplication, Excel or Google Sheets for extraction.",
          "Record reasons for full-text exclusions. They feed the PRISMA flow diagram."
        ],
        g: [
          ["Screening studies with Rayyan", "Rayyan systematic review screening tutorial"],
          ["Data extraction for systematic reviews", "data extraction systematic review form tutorial"]
        ],
        n: [["Using Rayyan for a review project in Nigeria", "Rayyan systematic review Nigerian students tutorial"]],
        r: [["Rayyan", "https://www.rayyan.ai/"], ["Covidence", "https://www.covidence.org/"]]
      },
      {
        id: "rob",
        title: "Risk of bias and critical appraisal",
        level: "Core",
        summary: "A pooled result is only as good as the studies behind it. Match the appraisal tool to the study design.",
        know: [
          "Randomised trials: Cochrane RoB 2. Non-randomised interventions: ROBINS-I.",
          "Observational: Newcastle-Ottawa Scale or JBI checklists. Prevalence: JBI prevalence checklist. Diagnostic: QUADAS-2.",
          "Qualitative: CASP or JBI qualitative checklist.",
          "Appraise in duplicate, present results in a table or traffic-light plot, and use them in the synthesis."
        ],
        g: [
          ["Cochrane RoB 2 tutorial", "Cochrane RoB 2 risk of bias tool tutorial"],
          ["Newcastle-Ottawa Scale and JBI checklists", "Newcastle Ottawa scale JBI critical appraisal checklist tutorial"]
        ],
        n: [["Critical appraisal training Nigeria", "critical appraisal evidence based medicine workshop Nigeria"]],
        r: [["Risk of bias tools", "https://www.riskofbias.info/"], ["CASP checklists", "https://casp-uk.net/casp-tools-checklists/"], ["JBI critical appraisal tools", "https://jbi.global/critical-appraisal-tools"]]
      },
      {
        id: "metaanalysis",
        title: "Meta-analysis step by step",
        level: "Advanced",
        summary: "Pool results when studies are similar enough. Understand the statistics before pressing run in the software.",
        know: [
          "Effect measures: risk ratio, odds ratio, mean difference, standardised mean difference, hazard ratio.",
          "Fixed-effect versus random-effects models and when each is justified.",
          "Heterogeneity: Q, I-squared, tau-squared and prediction intervals.",
          "Forest plots and funnel plots. Software: RevMan, R (meta, metafor), Stata, Jamovi."
        ],
        g: [
          ["Meta-analysis in R with metafor", "meta-analysis in R metafor tutorial"],
          ["Interpreting forest plots and heterogeneity", "forest plot heterogeneity I squared explained meta-analysis"],
          ["Meta-analysis in RevMan", "RevMan 5 meta-analysis tutorial"]
        ],
        n: [["Meta-analysis workshop for Nigerian health researchers", "meta-analysis workshop Nigeria health researchers"]],
        r: [["Doing Meta-Analysis with R (free book)", "https://bookdown.org/MathiasHarrer/Doing_Meta_Analysis_in_R/"], ["Cochrane RevMan", "https://revman.cochrane.org/"]]
      },
      {
        id: "prevalencema",
        title: "Pooling prevalence: the Nigerian meta-analysis workhorse",
        level: "Advanced",
        summary: "Many Nigerian reviews pool prevalence from cross-sectional studies. It needs different methods from pooling treatment effects.",
        know: [
          "Transform proportions (logit or Freeman-Tukey double arcsine) before pooling, then back-transform.",
          "Expect very high heterogeneity. Explore it by region, setting, tool and year instead of hiding it.",
          "Use the JBI prevalence checklist and consider sampling frames and response rates.",
          "Report with PRISMA 2020 and, for observational designs, MOOSE."
        ],
        g: [
          ["Meta-analysis of proportions in R", "meta-analysis of proportions prevalence R metaprop tutorial"],
          ["Freeman-Tukey and logit transformations", "pooled prevalence meta-analysis Freeman-Tukey double arcsine"]
        ],
        n: [["Pooled prevalence systematic review Nigeria", "systematic review and meta-analysis prevalence Nigeria how to"]],
        r: [["JBI prevalence meta-analysis guidance", "https://synthesismanual.jbi.global/"]]
      },
      {
        id: "metaadvanced",
        title: "Subgroup analysis, meta-regression and publication bias",
        level: "Advanced",
        summary: "Explain why studies differ and test whether your result is fragile.",
        know: [
          "Pre-specify subgroups. Post-hoc exploration is hypothesis-generating only.",
          "Meta-regression needs enough studies (roughly ten per covariate).",
          "Egger test, trim-and-fill and funnel plot asymmetry, and what they cannot prove.",
          "Sensitivity analysis: leave-one-out and excluding high risk of bias studies."
        ],
        g: [
          ["Meta-regression and subgroup analysis", "meta-regression subgroup analysis meta-analysis explained"],
          ["Publication bias and funnel plots", "publication bias funnel plot Egger test explained"]
        ],
        n: [["Advanced meta-analysis training Africa", "advanced meta-analysis training Africa researchers"]],
        r: [["Cochrane Handbook chapters 10 and 13", "https://training.cochrane.org/handbook/current"]]
      },
      {
        id: "grade",
        title: "GRADE and certainty of evidence",
        level: "Advanced",
        summary: "GRADE shows how confident you are in each finding. Guideline panels and funders expect it.",
        know: [
          "Start high for trials, low for observational studies, then rate down or up.",
          "Five reasons to rate down: risk of bias, inconsistency, indirectness, imprecision, publication bias.",
          "Build a Summary of Findings table with GRADEpro.",
          "Certainty is high, moderate, low or very low, and it applies per outcome."
        ],
        g: [
          ["GRADE approach explained", "GRADE approach certainty of evidence explained"],
          ["Summary of findings table GRADEpro", "GRADEpro summary of findings table tutorial"]
        ],
        n: [["Evidence to decision and guideline development in Nigeria", "evidence based guideline development GRADE Nigeria"]],
        r: [["GRADEpro GDT", "https://www.gradepro.org/"]]
      },
      {
        id: "scoping",
        title: "Scoping reviews",
        level: "Core",
        summary: "Map a broad field, find gaps and clarify concepts. Popular for emerging Nigerian topics with sparse trials.",
        know: [
          "Follow Arksey and O'Malley, the JBI methodology, and PRISMA-ScR.",
          "Use the PCC framework (Population, Concept, Context).",
          "Quality appraisal is optional. Charting the data is mandatory.",
          "A scoping review does not answer an effect question. Do not call it a systematic review."
        ],
        g: [
          ["Conducting a scoping review", "how to conduct a scoping review JBI PRISMA-ScR"],
          ["PCC framework for scoping reviews", "PCC population concept context scoping review"]
        ],
        n: [["Scoping review of Nigerian health policy or practice", "scoping review Nigeria example methodology"]],
        r: [["PRISMA-ScR", "https://www.prisma-statement.org/scoping"]]
      },
      {
        id: "qes",
        title: "Qualitative evidence synthesis",
        level: "Advanced",
        summary: "Synthesise qualitative studies into themes. It adds the why and how behind effect estimates.",
        know: [
          "Thematic synthesis, meta-ethnography and framework synthesis.",
          "Sampling is purposive, not exhaustive. Quality appraisal with CASP.",
          "Assess confidence with GRADE-CERQual and report with ENTREQ or eMERGe.",
          "Pairs well with an effectiveness review in a mixed-methods review."
        ],
        g: [
          ["Qualitative evidence synthesis", "qualitative evidence synthesis thematic synthesis meta-ethnography"],
          ["GRADE-CERQual", "GRADE-CERQual confidence in qualitative evidence"]
        ],
        n: [["Qualitative synthesis for health systems in Africa", "qualitative evidence synthesis Africa health systems"]],
        r: [["CERQual", "https://www.cerqual.org/"]]
      },
      {
        id: "prismareport",
        title: "PRISMA 2020 and writing up the review",
        level: "Core",
        summary: "Reviews are judged by reporting. Follow PRISMA 2020 and include the flow diagram.",
        know: [
          "27-item checklist and the four-phase flow diagram (identification, screening, eligibility, inclusion).",
          "Describe all deviations from the protocol, and any funding or conflicts.",
          "Share data, extraction forms and analytic code in a repository.",
          "Check target journal expectations (many require the PRISMA checklist at submission)."
        ],
        g: [
          ["PRISMA 2020 explained", "PRISMA 2020 statement explained flow diagram"],
          ["Writing up a systematic review", "how to write a systematic review manuscript"]
        ],
        n: [["Publishing a systematic review from Nigeria", "publishing systematic review Nigerian researcher tips"]],
        r: [["PRISMA 2020 and flow diagram tool", "https://www.prisma-statement.org/prisma-2020-flow-diagram"]]
      }
    ]
  },
  {
    id: "stats",
    title: "Biostatistics and data analysis",
    blurb: "From cleaning a spreadsheet to regression and survival analysis, in the software people really use.",
    topics: [
      {
        id: "descriptive",
        title: "Data cleaning and descriptive statistics",
        level: "Start here",
        summary: "Most analysis errors start with messy data. Learn to clean, code, summarise and display first.",
        know: [
          "Variable types: nominal, ordinal, interval, ratio, and the summary suited to each.",
          "Check for missing values, outliers and impossible entries before any test.",
          "Mean and SD versus median and IQR, depending on distribution.",
          "Tables and graphs that tell the story without decoration."
        ],
        g: [
          ["Descriptive statistics for beginners", "descriptive statistics for beginners data cleaning"],
          ["Data cleaning in Excel and R", "data cleaning tutorial Excel R beginners"]
        ],
        n: [["Biostatistics for Nigerian postgraduate students", "biostatistics lecture Nigeria postgraduate SPSS"]],
        r: [["R for Data Science (free)", "https://r4ds.hadley.nz/"]]
      },
      {
        id: "inference",
        title: "Hypothesis tests, p-values and confidence intervals",
        level: "Core",
        summary: "Choose the right test, interpret it correctly and stop equating p less than 0.05 with truth.",
        know: [
          "t-test, chi-square, Mann-Whitney, Kruskal-Wallis, ANOVA, and correlation: when each applies.",
          "Parametric assumptions and what to do when they fail.",
          "Confidence intervals show size and precision. Effect sizes show importance.",
          "Multiple testing and pre-specifying hypotheses."
        ],
        g: [
          ["Choosing a statistical test", "which statistical test to use flowchart explained"],
          ["P-values and confidence intervals explained", "p-value confidence interval explained correctly"]
        ],
        n: [["SPSS hypothesis testing tutorial for students in Nigeria", "SPSS chi-square t-test tutorial Nigeria student"]],
        r: [["Statistics resources from UCLA OARC", "https://stats.oarc.ucla.edu/"]]
      },
      {
        id: "regression",
        title: "Regression: linear, logistic and Poisson",
        level: "Core",
        summary: "Adjust for confounders and model outcomes. Logistic regression appears in nearly every Nigerian epidemiology paper.",
        know: [
          "Linear for continuous outcomes, logistic for binary, Poisson or negative binomial for counts.",
          "Crude versus adjusted odds ratios, and how to read them.",
          "Variable selection from theory, not only from univariate p-values.",
          "Check model fit, multicollinearity, and events per variable."
        ],
        g: [
          ["Logistic regression explained", "logistic regression explained odds ratio interpretation"],
          ["Logistic regression in SPSS and Stata", "logistic regression SPSS Stata tutorial"]
        ],
        n: [["Multivariable logistic regression for Nigerian research", "logistic regression adjusted odds ratio Nigeria study tutorial"]],
        r: [["Regression resources", "https://stats.oarc.ucla.edu/stata/"]]
      },
      {
        id: "survival",
        title: "Survival analysis",
        level: "Advanced",
        summary: "Analyse time-to-event data such as time to death, relapse or default from treatment.",
        know: [
          "Censoring and why ordinary regression fails with it.",
          "Kaplan-Meier curves and the log-rank test.",
          "Cox proportional hazards model and checking the assumption.",
          "Competing risks and time-varying covariates, briefly."
        ],
        g: [["Survival analysis Kaplan-Meier and Cox", "survival analysis Kaplan Meier Cox regression tutorial"]],
        n: [["Survival analysis for HIV or cancer cohorts in Nigeria", "survival analysis cohort Nigeria HIV cancer Kaplan Meier"]],
        r: [["survival package R", "https://cran.r-project.org/package=survival"]]
      },
      {
        id: "software",
        title: "Choosing software: SPSS, Stata, R, Jamovi, Python",
        level: "Start here",
        summary: "Pick one tool, learn it well. Free options now match paid software for most research tasks.",
        know: [
          "SPSS: menu-driven, widely taught in Nigerian universities. Stata: strong for epidemiology and surveys.",
          "R and RStudio: free, reproducible, huge package ecosystem. Jamovi and JASP: free and friendly.",
          "Write code or save syntax so analysis can be re-run and checked.",
          "Use version control and keep raw data untouched."
        ],
        g: [
          ["R for beginners", "R programming for beginners data analysis RStudio"],
          ["Stata for beginners", "Stata tutorial for beginners"],
          ["Jamovi free statistics", "jamovi tutorial free statistics software"]
        ],
        n: [["SPSS tutorial Nigerian students", "SPSS data analysis tutorial for project students Nigeria"]],
        r: [["R Project", "https://www.r-project.org/"], ["Jamovi", "https://www.jamovi.org/"], ["Posit (RStudio)", "https://posit.co/"]]
      },
      {
        id: "surveydata",
        title: "Complex survey data: working with DHS, MICS and GHS",
        level: "Advanced",
        summary: "National surveys use weights, strata and clusters. Ignoring them gives wrong standard errors and wrong estimates.",
        know: [
          "Download Nigeria DHS data (free after registration) and read the recode manual.",
          "Declare the survey design (weights, PSU, strata) before analysis, using svyset in Stata or the survey package in R.",
          "Know the units: women, households, children. Merge files correctly.",
          "Account for the Nigerian state and zone structure, and reference the survey report."
        ],
        g: [
          ["Analysing DHS data", "analyzing DHS data tutorial survey weights"],
          ["Complex survey analysis in R and Stata", "complex survey design analysis svyset survey package R"]
        ],
        n: [["Nigeria Demographic and Health Survey analysis", "Nigeria Demographic and Health Survey NDHS analysis tutorial"]],
        r: [["DHS Program", "https://dhsprogram.com/"], ["National Bureau of Statistics", "https://www.nigerianstat.gov.ng/"]]
      },
      {
        id: "causal",
        title: "Confounding, causal thinking and missing data",
        level: "Advanced",
        summary: "Move from association to defensible causal claims and handle missing values honestly.",
        know: [
          "Directed acyclic graphs (DAGs) to choose adjustment variables.",
          "Mediators, colliders and effect modification.",
          "Missing completely at random, at random, not at random, and multiple imputation.",
          "Sensitivity analysis and the E-value."
        ],
        g: [
          ["Causal inference and DAGs", "causal inference DAGs epidemiology explained"],
          ["Multiple imputation for missing data", "multiple imputation missing data tutorial"]
        ],
        n: [["Advanced epidemiology methods Africa", "advanced epidemiology methods lecture Africa"]],
        r: [["DAGitty", "https://www.dagitty.net/"]]
      }
    ]
  },
  {
    id: "data",
    title: "Data collection and fieldwork",
    blurb: "Collect clean data in real conditions, with tools that work offline and respect the community.",
    topics: [
      {
        id: "digital",
        title: "Digital data collection: KoboToolbox, ODK and REDCap",
        level: "Core",
        summary: "Replace paper with phones and tablets. Cleaner data, faster analysis and offline work with no internet.",
        know: [
          "KoboToolbox and ODK build forms in Excel (XLSForm) and work offline.",
          "REDCap suits clinical and longitudinal studies with audit trails.",
          "Add constraints and skip logic to stop errors at entry.",
          "Pilot the form, train enumerators, and back up submissions daily."
        ],
        g: [
          ["KoboToolbox full tutorial", "KoboToolbox tutorial build form XLSForm"],
          ["REDCap tutorial", "REDCap tutorial building a project survey"]
        ],
        n: [["Data collection with Kobo in Nigeria", "KoboToolbox Nigeria survey data collection offline"]],
        r: [["KoboToolbox", "https://www.kobotoolbox.org/"], ["REDCap", "https://projectredcap.org/"], ["XLSForm", "https://xlsform.org/"]]
      },
      {
        id: "fieldwork",
        title: "Fieldwork in Nigerian communities",
        level: "Core",
        summary: "Practical skills for entering communities, training teams, managing logistics and staying safe.",
        know: [
          "Community entry: engage traditional rulers, local government officials and gatekeepers before data collection.",
          "Recruit and train enumerators who speak the local language, and standardise their approach.",
          "Plan for security, transport, seasons, power and phone network. Write a risk plan.",
          "Pay fairly, supervise daily and keep a field log."
        ],
        g: [
          ["Field research best practices", "fieldwork research methods best practices enumerator training"],
          ["Community engagement in research", "community engagement in health research ethics gatekeepers"]
        ],
        n: [["Conducting fieldwork in northern and southern Nigeria", "field research Nigeria community entry data collection experience"]],
        r: [["Global Health Training Centre", "https://globalhealthtrainingcentre.tghn.org/"]]
      },
      {
        id: "datamanagement",
        title: "Data management, FAIR data and security",
        level: "Core",
        summary: "Plan how data will be stored, protected, shared and preserved before you collect a single record.",
        know: [
          "Data management plan: formats, storage, backup, access and retention.",
          "De-identify data, encrypt devices, and restrict access.",
          "FAIR principles: Findable, Accessible, Interoperable, Reusable.",
          "Share datasets in a repository such as OSF, Zenodo or Dryad where ethics permit."
        ],
        g: [
          ["Research data management basics", "research data management plan basics FAIR data"],
          ["De-identifying data", "de-identification of research data privacy"]
        ],
        n: [["Data protection in Nigerian health research", "Nigeria data protection health research data management"]],
        r: [["Zenodo", "https://zenodo.org/"], ["Nigeria Data Protection Commission", "https://ndpc.gov.ng/"]]
      }
    ]
  },
  {
    id: "ethics",
    title: "Ethics, regulation and integrity",
    blurb: "Get approvals right, protect participants, and keep your record clean.",
    topics: [
      {
        id: "ethicsfoundations",
        title: "Ethical principles: Belmont, Helsinki and CIOMS",
        level: "Start here",
        summary: "The shared global foundation of research ethics, and how it shapes every ethics committee decision.",
        know: [
          "Respect for persons, beneficence, justice.",
          "Declaration of Helsinki and CIOMS guidelines for health research.",
          "Risk-benefit assessment, fair participant selection, and post-trial responsibilities.",
          "Complete a recognised training such as CITI or the NIH course."
        ],
        g: [
          ["Research ethics fundamentals", "research ethics principles Belmont Helsinki CIOMS explained"],
          ["Good Clinical Practice basics", "ICH Good Clinical Practice GCP training"]
        ],
        n: [["Research ethics training in Nigeria", "research ethics training Nigeria health researchers"]],
        r: [["CITI Program", "https://about.citiprogram.org/"], ["CIOMS guidelines", "https://cioms.ch/publications/product/international-ethical-guidelines-for-health-related-research-involving-humans/"]]
      },
      {
        id: "nhrec",
        title: "NHREC and ethical approval in Nigeria",
        level: "Core",
        summary: "How the National Health Research Ethics Committee and institutional committees work, and how to get approval without delays.",
        know: [
          "The National Code of Health Research Ethics sets standards. NHREC registers and audits institutional ethics committees.",
          "Most studies get approval from an institutional or state ethics committee. Multi-site studies need clear coordination.",
          "Prepare protocol, consent forms, instruments, investigator CVs and evidence of training.",
          "Do not start data collection before written approval. Report amendments and adverse events."
        ],
        g: [["How ethics committees review studies", "how research ethics committees review protocols IRB process"]],
        n: [["NHREC ethical approval process Nigeria", "NHREC ethical approval Nigeria how to apply"], ["National Code of Health Research Ethics Nigeria", "National Code of Health Research Ethics Nigeria"]],
        r: [["NHREC", "https://nhrec.net/"], ["Federal Ministry of Health", "https://www.health.gov.ng/"]]
      },
      {
        id: "consent",
        title: "Informed consent in diverse literacy and language settings",
        level: "Core",
        summary: "Consent is a process, not a signature. Adapt it for low literacy, multiple languages, minors and community norms.",
        know: [
          "Voluntariness, understanding, and the right to withdraw without penalty.",
          "Use plain language, translate into local languages, and test understanding.",
          "Assent for children plus parental consent, and an impartial witness for non-literate participants.",
          "Community permission does not replace individual consent."
        ],
        g: [["Informed consent process explained", "informed consent process research explained"]],
        n: [["Informed consent in Nigerian communities", "informed consent in Nigeria rural community research challenges"]],
        r: [["WHO ethics review resources", "https://www.who.int/groups/research-ethics-review-committee"]]
      },
      {
        id: "dataprotection",
        title: "Nigeria Data Protection Act and research data",
        level: "Core",
        summary: "Personal and health data carry legal duties. Know what lawful basis, consent and security you need.",
        know: [
          "The Nigeria Data Protection Act 2023 created the Nigeria Data Protection Commission.",
          "Health data is sensitive personal data and needs stronger safeguards.",
          "Minimise data, state purposes, restrict access and plan breach response.",
          "Cross-border sharing with international collaborators needs a data-sharing agreement."
        ],
        g: [["Data protection and research", "GDPR data protection research data explained"]],
        n: [["Nigeria Data Protection Act explained", "Nigeria Data Protection Act 2023 explained"]],
        r: [["NDPC", "https://ndpc.gov.ng/"]]
      },
      {
        id: "vulnerable",
        title: "Research with vulnerable and conflict-affected groups",
        level: "Advanced",
        summary: "Children, pregnant women, people with disabilities and displaced communities need extra protections.",
        know: [
          "Additional safeguards, minimal risk where possible, and a clear referral pathway.",
          "Never let participation affect access to care or aid.",
          "Trauma-informed interviewing and researcher wellbeing.",
          "Plan for confidentiality when the community is small and identifiable."
        ],
        g: [["Ethics in research with vulnerable populations", "ethics research vulnerable populations children pregnant women"]],
        n: [["Research with internally displaced persons in Nigeria", "research with IDPs Nigeria ethics humanitarian"]],
        r: [["Sphere standards", "https://spherestandards.org/"]]
      },
      {
        id: "integrity",
        title: "Research integrity, plagiarism and authorship",
        level: "Core",
        summary: "Misconduct ends careers. Learn what counts as fabrication, falsification, plagiarism and unethical authorship.",
        know: [
          "FFP: fabrication, falsification, plagiarism. Also duplicate publication and salami slicing.",
          "ICMJE authorship: substantial contribution, drafting, approval and accountability.",
          "Gift and ghost authorship are misconduct. Agree authorship order early.",
          "Check similarity with a plagiarism tool, and always paraphrase and cite."
        ],
        g: [
          ["Research integrity and misconduct", "research integrity misconduct fabrication falsification plagiarism"],
          ["ICMJE authorship criteria", "ICMJE authorship criteria explained"]
        ],
        n: [["Plagiarism and academic integrity in Nigerian universities", "plagiarism academic integrity Nigerian universities postgraduate"]],
        r: [["ICMJE recommendations", "https://www.icmje.org/recommendations/"], ["COPE", "https://publicationethics.org/"], ["Retraction Watch", "https://retractionwatch.com/"]]
      }
    ]
  },
  {
    id: "funding",
    title: "Funding, grants and collaboration",
    blurb: "Find money, write competitive proposals and build equitable partnerships.",
    topics: [
      {
        id: "grantwriting",
        title: "Grant writing fundamentals",
        level: "Core",
        summary: "Funders back clear aims, credible teams and realistic budgets. Learn the structure reviewers score.",
        know: [
          "Specific aims or objectives, significance, approach, outputs and impact.",
          "Logic model linking activities to outcomes.",
          "Budget justification: personnel, equipment, field costs, overheads.",
          "Read the call text closely and address each scoring criterion directly."
        ],
        g: [
          ["Grant writing for beginners", "grant writing for beginners research funding proposal"],
          ["Writing specific aims", "how to write specific aims grant"]
        ],
        n: [["Grant writing workshop Nigeria", "grant writing workshop Nigerian researchers funding"]],
        r: [["Grants.gov learning", "https://www.grants.gov/learn-grants"]]
      },
      {
        id: "nigerianfunders",
        title: "Funding available in Nigeria: TETFund and the National Research Fund",
        level: "Core",
        summary: "Domestic funding routes for staff of Nigerian tertiary institutions and eligible researchers.",
        know: [
          "TETFund supports research, conferences and fellowships through institution-based research and the National Research Fund.",
          "Applications usually go through your institution's TETFund desk. Check current calls and eligibility every cycle.",
          "Align proposals with national priority areas stated in the call.",
          "Keep records for reporting and audit."
        ],
        g: [["Finding research funding opportunities", "how to find research funding opportunities for early career researchers"]],
        n: [["TETFund institution based research explained", "TETFund institution based research IBR proposal"], ["TETFund National Research Fund", "TETFund National Research Fund NRF application"]],
        r: [["TETFund", "https://tetfund.gov.ng/"]]
      },
      {
        id: "internationalfunders",
        title: "International funders: Wellcome, NIHR, NIH Fogarty, Gates and others",
        level: "Advanced",
        summary: "Larger grants usually need a track record, partners and strong preliminary evidence. Start early.",
        know: [
          "Wellcome, NIHR Global Health, NIH including Fogarty, Gates Foundation, and AAS-linked programmes.",
          "Many calls favour African-led teams and capacity strengthening.",
          "Early-career fellowships build a record for larger grants.",
          "Use mailing lists and funder newsletters to track deadlines."
        ],
        g: [
          ["Applying for Wellcome and NIHR funding", "how to apply Wellcome NIHR global health research grant"],
          ["NIH Fogarty funding for global health", "NIH Fogarty global health research funding"]
        ],
        n: [["Funding opportunities for African researchers", "funding opportunities African researchers fellowships"]],
        r: [["Wellcome", "https://wellcome.org/grant-funding"], ["NIHR funding", "https://www.nihr.ac.uk/funding"], ["Fogarty", "https://www.fic.nih.gov/"], ["African Academy of Sciences", "https://www.aasciences.africa/"], ["TWAS", "https://twas.org/"]]
      },
      {
        id: "fellowships",
        title: "Scholarships and fellowships for postgraduate research",
        level: "Core",
        summary: "Funded MSc and PhD routes abroad and at home, and how to write a convincing application.",
        know: [
          "Commonwealth, Chevening, Fulbright, DAAD, Gates Cambridge and many institutional awards.",
          "Statement of purpose, research proposal, references and English test where needed.",
          "Contact potential supervisors before applying.",
          "Dates change yearly. Check official sites."
        ],
        g: [
          ["Writing a strong statement of purpose", "statement of purpose PhD scholarship how to write"],
          ["PhD funding and scholarships", "how to find fully funded PhD scholarships"]
        ],
        n: [["Scholarship application tips for Nigerians", "scholarship application tips Nigerians Chevening Commonwealth"]],
        r: [["Commonwealth Scholarships", "https://cscuk.fcdo.gov.uk/"], ["Chevening", "https://www.chevening.org/"]]
      },
      {
        id: "partnerships",
        title: "Equitable partnerships and global health collaboration",
        level: "Advanced",
        summary: "Collaborate as an equal partner. Learn how to negotiate roles, data, authorship and benefit sharing.",
        know: [
          "Agree on leadership, budget share, data ownership and authorship in writing.",
          "Beware extractive ('helicopter') research. Local investigators should shape the question.",
          "Capacity strengthening should be planned, resourced and measured.",
          "Use partnership frameworks such as the Global Code of Conduct for research in resource-poor settings."
        ],
        g: [["Equitable partnerships in global health research", "equitable partnerships global health research decolonising"]],
        n: [["Nigerian researchers on research partnerships", "Nigerian researchers equitable research partnership collaboration"]],
        r: [["Global Code of Conduct (TRUST)", "https://www.globalcodeofconduct.org/"]]
      }
    ]
  },
  {
    id: "writing",
    title: "Writing, publishing and visibility",
    blurb: "Write clearly, publish in credible journals and avoid predatory traps.",
    topics: [
      {
        id: "imrad",
        title: "Scientific writing and IMRaD",
        level: "Start here",
        summary: "Structure a paper that a busy editor or reviewer can follow in minutes.",
        know: [
          "Introduction (why), Methods (how), Results (what), Discussion (so what).",
          "Write the methods and results first, then the introduction and abstract.",
          "Short sentences, active voice, precise verbs, and consistent terms.",
          "Tables and figures should stand alone with a clear title and legend."
        ],
        g: [
          ["Writing a scientific paper IMRaD", "how to write a scientific paper IMRaD structure"],
          ["Academic writing style", "academic writing clarity concise scientific style"]
        ],
        n: [["Scientific writing workshop Nigeria", "scientific writing publishing workshop Nigeria researchers"]],
        r: [["Writing guides by Nature", "https://www.nature.com/scitable/topicpage/scientific-papers-13815490/"]]
      },
      {
        id: "reportingguides",
        title: "Reporting guidelines and the EQUATOR Network",
        level: "Core",
        summary: "Use the right checklist so reviewers can see exactly what you did. Many journals now require it.",
        know: [
          "CONSORT, STROBE, PRISMA, COREQ, STARD, CARE, SQUIRE, CHEERS and others.",
          "Use the finder on this site's guideline tool, or the EQUATOR library.",
          "Submit the completed checklist with the manuscript.",
          "Reporting guidelines are not quality scores. They are transparency tools."
        ],
        g: [
          ["EQUATOR Network and reporting guidelines", "EQUATOR network reporting guidelines explained CONSORT STROBE"],
          ["STROBE for observational studies", "STROBE checklist observational studies tutorial"]
        ],
        n: [["Reporting guidelines for Nigerian authors", "reporting guidelines manuscript preparation Nigerian authors"]],
        r: [["EQUATOR Network", "https://www.equator-network.org/"]]
      },
      {
        id: "journals",
        title: "Choosing a journal and avoiding predatory publishers",
        level: "Core",
        summary: "A paper in the wrong journal can harm your record. Check legitimacy before you submit or pay.",
        know: [
          "Match scope, audience, indexing and turnaround. Use Think. Check. Submit.",
          "Verify the journal in DOAJ, Scopus, Web of Science, PubMed or AJOL.",
          "Warning signs: unsolicited invitations, promised rapid acceptance, vague peer review, hidden fees.",
          "APC waivers exist for many African authors. Research4Life gives free or low-cost access to literature in eligible countries."
        ],
        g: [
          ["Predatory journals and how to spot them", "predatory journals how to identify avoid"],
          ["How to choose a journal", "how to choose the right journal for your manuscript"]
        ],
        n: [["Predatory journals and Nigerian academics", "predatory journals Nigeria academics promotion warning"]],
        r: [["Think. Check. Submit.", "https://thinkchecksubmit.org/"], ["DOAJ", "https://doaj.org/"], ["Research4Life", "https://www.research4life.org/"], ["AJOL", "https://www.ajol.info/"]]
      },
      {
        id: "peerreview",
        title: "Peer review and responding to reviewers",
        level: "Core",
        summary: "Rejection is normal. Learn to read decisions, revise strategically and write a response letter that gets accepted.",
        know: [
          "Understand desk rejection, major revision and minor revision.",
          "Respond to every comment point by point, politely, and show exactly where you changed the text.",
          "If you disagree, explain with evidence. Never ignore a comment.",
          "Become a reviewer yourself. It sharpens your own writing."
        ],
        g: [
          ["Responding to peer reviewers", "how to respond to peer reviewer comments response letter"],
          ["How peer review works", "how peer review works journal process explained"]
        ],
        n: [["Manuscript revision and reviewer response Nigeria", "manuscript peer review response Nigerian researchers tips"]],
        r: []
      },
      {
        id: "thesis",
        title: "Writing a thesis or dissertation and surviving the defence",
        level: "Core",
        summary: "A practical route through chapters, supervisors, internal and external examiners and the viva.",
        know: [
          "Typical five-chapter structure: introduction, literature review, methodology, results, discussion and conclusion.",
          "Write a little every day, and keep a living literature matrix.",
          "Manage your supervisor relationship: agendas, deadlines and written feedback.",
          "Prepare the defence by anticipating questions on design, sample size, bias and limitations."
        ],
        g: [
          ["Thesis writing tips", "how to write a thesis or dissertation tips structure"],
          ["Preparing for a PhD viva", "PhD viva defence preparation tips"]
        ],
        n: [["Project and thesis defence in Nigerian universities", "thesis defence Nigeria university tips postgraduate"]],
        r: [["Thesis Whisperer", "https://thesiswhisperer.com/"]]
      },
      {
        id: "referencing",
        title: "Reference managers and citation styles",
        level: "Start here",
        summary: "Stop typing references by hand. A manager saves hours and prevents errors.",
        know: [
          "Zotero (free), Mendeley and EndNote. Zotero has strong browser capture.",
          "Common styles: APA 7, Vancouver, Harvard. Follow your institution or journal.",
          "Use the Word or Google Docs plugin, and avoid copying citation text from the web.",
          "Always check each reference against the source."
        ],
        g: [
          ["Zotero tutorial", "Zotero tutorial beginners Word plugin"],
          ["Mendeley and EndNote basics", "Mendeley vs EndNote vs Zotero comparison"]
        ],
        n: [["Referencing in Nigerian university projects", "referencing citation APA Vancouver Nigerian university project"]],
        r: [["Zotero", "https://www.zotero.org/"]]
      },
      {
        id: "presenting",
        title: "Abstracts, posters and conference presentations",
        level: "Core",
        summary: "Conferences open doors to collaborators and funding. Prepare a clear abstract and a confident talk.",
        know: [
          "Structured abstract: background, methods, results, conclusion.",
          "Poster: one message, large fonts, minimal text, a clear figure.",
          "Talks: tell one story, practise timing, and plan for questions.",
          "Look for travel grants and virtual options."
        ],
        g: [
          ["Writing a conference abstract", "how to write conference abstract research"],
          ["Scientific poster and talk design", "scientific poster design presentation tips"]
        ],
        n: [["Conferences and travel grants for Nigerian researchers", "conference travel grants Nigerian researchers"]],
        r: [["Better Posters", "https://betterposters.blogspot.com/"]]
      },
      {
        id: "visibility",
        title: "ORCID, indexing, citations and research visibility",
        level: "Core",
        summary: "Make your work findable and credited. Build a consistent identity from your first paper.",
        know: [
          "Get an ORCID iD and use it everywhere. Use one consistent name format.",
          "Maintain Google Scholar and institutional profiles.",
          "Open access routes, preprints and sharing data raise reach.",
          "Metrics like h-index are limited. Use them with care, not as the whole picture."
        ],
        g: [
          ["ORCID and researcher profiles", "ORCID Google Scholar profile researcher visibility"],
          ["Increasing research impact", "how to increase research visibility and citations"]
        ],
        n: [["Research visibility for Nigerian academics", "research visibility Nigerian academics Google Scholar ORCID"]],
        r: [["ORCID", "https://orcid.org/"], ["Google Scholar profiles", "https://scholar.google.com/intl/en/scholar/citations.html"]]
      }
    ]
  },
  {
    id: "tools",
    title: "Digital tools, AI and open science",
    blurb: "Work faster with modern tools while keeping the research honest.",
    topics: [
      {
        id: "discovery",
        title: "Discovery and mapping tools",
        level: "Start here",
        summary: "Find related papers fast and see how a field fits together.",
        know: [
          "Google Scholar, Semantic Scholar and OpenAlex for broad discovery.",
          "Citation mapping tools show networks of related papers.",
          "Set up alerts for your topic and key authors.",
          "Always confirm findings in the original paper."
        ],
        g: [
          ["Literature mapping tools", "Connected Papers ResearchRabbit literature mapping tutorial"],
          ["Semantic Scholar and OpenAlex", "Semantic Scholar OpenAlex literature search tutorial"]
        ],
        n: [["Finding research papers with free tools", "free tools find research papers Nigeria student"]],
        r: [["Semantic Scholar", "https://www.semanticscholar.org/"], ["Connected Papers", "https://www.connectedpapers.com/"]]
      },
      {
        id: "ai",
        title: "Using AI responsibly in research",
        level: "Core",
        summary: "AI can speed up reading and writing, but it can also invent facts and citations. Use it with checks and disclosure.",
        know: [
          "AI tools can fabricate references. Verify every citation yourself.",
          "AI cannot be an author. Journals require disclosure of use.",
          "Do not upload confidential or identifiable participant data to public tools.",
          "Use AI for brainstorming, summarising and editing, not for inventing data or analysis."
        ],
        g: [
          ["AI tools for researchers", "AI tools for academic research responsibly use"],
          ["Journal policies on AI use", "journal policy generative AI authorship disclosure COPE"]
        ],
        n: [["AI in research for Nigerian students", "AI tools research Nigerian students responsible use thesis"]],
        r: [["COPE guidance on AI", "https://publicationethics.org/guidance/cope-position/authorship-and-ai-tools"]]
      },
      {
        id: "openscience",
        title: "Open science, preregistration and preprints",
        level: "Core",
        summary: "Share plans, data and early versions of work to build trust and speed up science.",
        know: [
          "Preregister hypotheses and analysis plans on OSF or AsPredicted.",
          "Preprint servers: medRxiv, bioRxiv, SSRN, Research Square, AfricArXiv.",
          "Choose a licence such as CC BY for papers and data.",
          "Check that your target journal accepts preprints."
        ],
        g: [
          ["Open science basics", "open science basics preregistration preprints"],
          ["Using the Open Science Framework", "Open Science Framework OSF tutorial"]
        ],
        n: [["Open access and preprints for African scholars", "open access preprints African researchers AfricArXiv"]],
        r: [["OSF", "https://osf.io/"], ["medRxiv", "https://www.medrxiv.org/"], ["AfricArXiv", "https://africarxiv.org/"]]
      },
      {
        id: "lowbandwidth",
        title: "Working with limited data, power and bandwidth",
        level: "Start here",
        summary: "Practical habits for researchers who deal with expensive data and unreliable power.",
        know: [
          "Download papers and videos when connectivity is good. Use offline-first tools.",
          "Keep a power bank and back up work to two places.",
          "Use lightweight tools: Zotero local library, R, Jamovi and Kobo offline mode.",
          "Use university library access and Research4Life to avoid paywalls."
        ],
        g: [["Offline research workflow", "offline research workflow tips low bandwidth"]],
        n: [["Research with limited internet in Nigeria", "research with limited internet and power Nigeria students tips"]],
        r: [["Research4Life", "https://www.research4life.org/"]]
      }
    ]
  },
  {
    id: "nigeria",
    title: "The Nigerian research landscape",
    blurb: "Where data, institutions, priorities and problems sit in Nigeria today.",
    topics: [
      {
        id: "ecosystem",
        title: "Institutions and regulators",
        level: "Start here",
        summary: "Know who regulates, funds and publishes research in Nigeria, so you can ask the right office the right question.",
        know: [
          "NUC (universities), TETFund (funding), NHREC (health ethics), NAFDAC (drugs and trials), NCDC (disease control), NIMR (medical research).",
          "National Bureau of Statistics for official data. The Federal Ministry of Health for policy.",
          "Learned bodies such as the Nigerian Academy of Science.",
          "State ministries and ethics committees often hold local approvals."
        ],
        g: [["How national research systems work", "national research systems ecosystem funding regulation explained"]],
        n: [["Nigeria research ecosystem overview", "Nigeria research and innovation ecosystem overview"]],
        r: [["NUC", "https://nuc.edu.ng/"], ["NIMR", "https://nimr.gov.ng/"], ["NCDC", "https://ncdc.gov.ng/"], ["NAFDAC", "https://nafdac.gov.ng/"], ["Nigerian Academy of Science", "https://nas.org.ng/"]]
      },
      {
        id: "datasources",
        title: "Key Nigerian data sources",
        level: "Core",
        summary: "A shortlist of datasets researchers use for secondary analysis, mapping and baseline figures.",
        know: [
          "Nigeria Demographic and Health Survey (DHS), Multiple Indicator Cluster Survey (MICS), General Household Survey (GHS-Panel), and the Nigeria HIV/AIDS Indicator and Impact Survey (NAIIS).",
          "Health Facility Registry and DHIS2 for facility and routine data.",
          "NBS reports for poverty, labour and agriculture.",
          "Check licence, year, representativeness and state-level reliability."
        ],
        g: [["Using secondary data for research", "secondary data analysis research methods explained"]],
        n: [["Nigeria DHS and GHS data tutorial", "Nigeria Demographic Health Survey GHS panel data tutorial"], ["Nigeria Health Facility Registry", "Nigeria health facility registry data"]],
        r: [["DHS Program", "https://dhsprogram.com/"], ["NBS", "https://www.nigerianstat.gov.ng/"]]
      },
      {
        id: "priorities",
        title: "Priority research areas and common gaps",
        level: "Core",
        summary: "Find topics that matter and are still under-studied. Use gaps in national plans and recent reviews.",
        know: [
          "Maternal, newborn and child health, malaria, HIV, TB, Lassa fever, sickle cell disease, NCDs, mental health, nutrition.",
          "Beyond health: education, agriculture, energy, governance, urbanisation, security and technology.",
          "Check the national health research agenda and recent systematic reviews for gaps.",
          "Choose a gap you can actually study with the time, funds and skills you have."
        ],
        g: [["How to identify research gaps", "how to identify research gaps literature review"]],
        n: [["Nigeria health research priorities", "Nigeria national health research priorities agenda"]],
        r: [["Federal Ministry of Health", "https://www.health.gov.ng/"]]
      },
      {
        id: "socialscience",
        title: "Social science, education and economics research in Nigeria",
        level: "Core",
        summary: "Methods and sources outside medicine: surveys, policy analysis, case studies and impact evaluation.",
        know: [
          "Common designs: surveys, case studies, ethnography, document analysis, panel data and impact evaluation.",
          "Data sources: GHS-Panel, NBS, World Bank microdata, central bank data and Afrobarometer.",
          "Education research: classroom observation, learning assessments, action research.",
          "Check ethics requirements even when your field is not health-related."
        ],
        g: [
          ["Social science research methods", "social science research methods overview"],
          ["Impact evaluation basics", "impact evaluation methods basics difference in differences randomised"]
        ],
        n: [["Social science research in Nigeria", "social science research methods Nigeria education economics study"]],
        r: [["Afrobarometer", "https://www.afrobarometer.org/"], ["World Bank Microdata Library", "https://microdata.worldbank.org/"]]
      },
      {
        id: "policy",
        title: "Evidence to policy: policy briefs and knowledge translation",
        level: "Advanced",
        summary: "Research matters when decision-makers use it. Package findings so ministries, NGOs and communities can act.",
        know: [
          "Identify the decision-maker, the decision, and the timeline.",
          "Policy brief: one to two pages, key message first, clear recommendations.",
          "Build relationships early. Policymakers trust people they know.",
          "Use workshops, dialogues, radio and plain-language summaries."
        ],
        g: [
          ["Writing a policy brief", "how to write a policy brief research"],
          ["Evidence informed policy making", "evidence informed policy making knowledge translation"]
        ],
        n: [["Research to policy in Nigeria", "evidence to policy Nigeria health research policy brief"]],
        r: [["WHO Evidence-informed Policy Network", "https://www.who.int/initiatives/evidence-informed-policy-network"]]
      },
      {
        id: "challenges",
        title: "Common challenges and practical workarounds",
        level: "Start here",
        summary: "Funding gaps, supervision quality, power, insecurity and data access. Practical ways researchers manage them.",
        know: [
          "Start small, build a track record, then scale up funding.",
          "Join a research group or network for mentoring and shared resources.",
          "Plan for delays, strikes and logistics when setting timelines.",
          "Document everything, including processes, so the work survives interruptions."
        ],
        g: [["Doing research with limited resources", "doing research with limited resources low and middle income countries"]],
        n: [["Challenges of research in Nigeria", "challenges of research in Nigeria universities funding"]],
        r: [["Global Health Network", "https://tghn.org/"]]
      },
      {
        id: "indigenous",
        title: "Indigenous knowledge and decolonial approaches",
        level: "Advanced",
        summary: "Respect local knowledge systems and include communities as partners, not only subjects.",
        know: [
          "Participatory and community-based participatory research.",
          "Ask who benefits, who owns the knowledge and who is credited.",
          "Use local languages and concepts, and return results to participants.",
          "Critique frameworks imported without local validation."
        ],
        g: [["Decolonising research methodologies", "decolonising research methodologies explained"]],
        n: [["Indigenous knowledge and research in Africa", "indigenous knowledge research Africa methodology"]],
        r: [["Participatory research toolkit", "https://www.participatorymethods.org/"]]
      }
    ]
  },
  {
    id: "career",
    title: "Research career and impact",
    blurb: "Build a research life: mentors, networks, communication and career paths.",
    topics: [
      {
        id: "careerpath",
        title: "Academic and non-academic research career paths",
        level: "Start here",
        summary: "Universities, institutes, NGOs, government, CROs and industry all hire researchers. Know the routes.",
        know: [
          "Academic ranks and promotion usually depend on publications, teaching and service. Check your institution's current criteria.",
          "Other paths: research institutes, public health agencies, NGOs, think tanks, CROs, data science roles.",
          "Build a CV that shows publications, funding, training, and skills.",
          "Map two to three mentors early."
        ],
        g: [["Research career paths", "research career paths academic non-academic options"]],
        n: [["Building a research career in Nigeria", "building research career Nigeria academic promotion publications"]],
        r: [["Vitae researcher development", "https://www.vitae.ac.uk/"]]
      },
      {
        id: "networks",
        title: "Mentorship, networks and communities",
        level: "Core",
        summary: "Research is a team sport. Join groups that train, review and connect you.",
        know: [
          "Seek mentors inside and outside your institution.",
          "Join networks such as the Global Health Network, AAS programmes and discipline societies.",
          "Offer to review, co-author and present. Reciprocity builds reputation.",
          "Use social media and email responsibly to connect with authors."
        ],
        g: [["Finding a research mentor", "finding a research mentor early career researcher"]],
        n: [["Research networks in Nigeria and Africa", "research networks Nigeria Africa early career researchers"]],
        r: [["The Global Health Network", "https://tghn.org/"]]
      },
      {
        id: "communication",
        title: "Communicating research to the public",
        level: "Core",
        summary: "Explain your findings in plain language to communities, media and funders.",
        know: [
          "Know your audience and lead with the main message.",
          "Use plain language summaries, infographics and short videos.",
          "Radio and community meetings can reach audiences that journals never do.",
          "Be accurate: do not overstate your findings."
        ],
        g: [["Science communication basics", "science communication basics plain language summary"]],
        n: [["Communicating research in Nigeria", "science communication Nigeria research radio community"]],
        r: [["The Conversation Africa", "https://theconversation.com/africa"]]
      }
    ]
  }
];

/* Systematic review workflow. topic refers to a topic id above. */
window.SR_STEPS = [
  { t: "Define the question", d: "Write it as PICO (or PEO, PCC). Check that no recent review already answers it.", topic: "question" },
  { t: "Choose the review type", d: "Systematic, scoping, rapid, umbrella or qualitative synthesis.", topic: "reviewtypes" },
  { t: "Write and register the protocol", d: "PRISMA-P. Register on PROSPERO or OSF before screening.", topic: "srprotocol" },
  { t: "Design the search strategy", d: "Several databases, grey literature, documented strings. Report with PRISMA-S.", topic: "srsearch" },
  { t: "Run searches and deduplicate", d: "Export to Zotero or Rayyan. Save raw results and search dates.", topic: "screening" },
  { t: "Screen titles, abstracts and full texts", d: "Two independent reviewers. Log reasons for exclusion.", topic: "screening" },
  { t: "Extract data", d: "Pilot the form. Extract in duplicate or verify a sample.", topic: "screening" },
  { t: "Assess risk of bias", d: "RoB 2, ROBINS-I, Newcastle-Ottawa, JBI or CASP, matched to design.", topic: "rob" },
  { t: "Synthesise the evidence", d: "Narrative, meta-analysis, prevalence pooling or qualitative synthesis.", topic: "metaanalysis" },
  { t: "Explore heterogeneity and bias", d: "Subgroups, meta-regression, funnel plots, sensitivity analysis.", topic: "metaadvanced" },
  { t: "Rate certainty of evidence", d: "GRADE and a Summary of Findings table.", topic: "grade" },
  { t: "Report and share", d: "PRISMA 2020 checklist and flow diagram. Deposit data and code.", topic: "prismareport" }
];

/* Reporting guideline finder. */
window.GUIDELINES = [
  { s: "Randomised trial", g: "CONSORT 2025", u: "https://www.consort-spirit.org/", a: "RoB 2", n: "Protocol: SPIRIT. Register the trial before enrolment." },
  { s: "Trial protocol", g: "SPIRIT 2025", u: "https://www.spirit-statement.org/", a: "n/a", n: "Describe randomisation, blinding, outcomes and analysis plan." },
  { s: "Cohort, case-control or cross-sectional study", g: "STROBE", u: "https://www.strobe-statement.org/", a: "Newcastle-Ottawa Scale or JBI", n: "Use the design-specific checklist." },
  { s: "Systematic review with or without meta-analysis", g: "PRISMA 2020", u: "https://www.prisma-statement.org/", a: "RoB 2, ROBINS-I, JBI", n: "Add the flow diagram. Register the protocol." },
  { s: "Systematic review protocol", g: "PRISMA-P", u: "https://www.prisma-statement.org/protocols", a: "n/a", n: "Register on PROSPERO or OSF." },
  { s: "Scoping review", g: "PRISMA-ScR", u: "https://www.prisma-statement.org/scoping", a: "Optional", n: "Use PCC. Follow JBI methodology." },
  { s: "Meta-analysis of observational studies", g: "MOOSE", u: "https://www.equator-network.org/?s=MOOSE", a: "Newcastle-Ottawa Scale or JBI", n: "Use alongside PRISMA 2020." },
  { s: "Qualitative interviews or focus groups", g: "COREQ", u: "https://www.equator-network.org/?s=COREQ", a: "CASP qualitative", n: "32 items covering team, design and analysis." },
  { s: "Qualitative research in general", g: "SRQR", u: "https://www.equator-network.org/?s=SRQR", a: "CASP qualitative", n: "Good for mixed qualitative approaches." },
  { s: "Qualitative evidence synthesis", g: "ENTREQ and GRADE-CERQual", u: "https://www.cerqual.org/", a: "CASP", n: "Describe the synthesis method and confidence." },
  { s: "Diagnostic accuracy study", g: "STARD", u: "https://www.equator-network.org/?s=STARD", a: "QUADAS-2", n: "Report the reference standard clearly." },
  { s: "Prediction model", g: "TRIPOD", u: "https://www.tripod-statement.org/", a: "PROBAST", n: "TRIPOD+AI covers machine-learning models." },
  { s: "Case report", g: "CARE", u: "https://www.care-statement.org/", a: "JBI case report checklist", n: "Obtain patient consent for publication." },
  { s: "Quality improvement study", g: "SQUIRE", u: "https://www.squire-statement.org/", a: "JBI", n: "Describe the context and intervention in detail." },
  { s: "Economic evaluation", g: "CHEERS", u: "https://www.equator-network.org/?s=CHEERS", a: "Drummond checklist", n: "State perspective, costs and time horizon." },
  { s: "Implementation study", g: "StaRI", u: "https://www.equator-network.org/?s=StaRI", a: "n/a", n: "Report both the strategy and the intervention." },
  { s: "Mixed methods study", g: "GRAMMS", u: "https://www.equator-network.org/?s=GRAMMS", a: "MMAT", n: "Show how strands are integrated." },
  { s: "Online survey", g: "CHERRIES", u: "https://www.equator-network.org/?s=CHERRIES", a: "n/a", n: "Report recruitment, access control and response rates." }
];

/* Nigeria quick directory. */
window.DIRECTORY = [
  { c: "Regulators and ethics", i: [
    ["NHREC", "https://nhrec.net/", "National Health Research Ethics Committee and the National Code."],
    ["NAFDAC", "https://nafdac.gov.ng/", "Approval for clinical trials involving regulated products."],
    ["NDPC", "https://ndpc.gov.ng/", "Nigeria Data Protection Commission."],
    ["Federal Ministry of Health", "https://www.health.gov.ng/", "Health policy, strategies and guidelines."]
  ]},
  { c: "Funding", i: [
    ["TETFund", "https://tetfund.gov.ng/", "Institution-based research and the National Research Fund."],
    ["Wellcome", "https://wellcome.org/grant-funding", "Fellowships and discovery research."],
    ["NIHR global health", "https://www.nihr.ac.uk/funding", "Research for health systems and global health."],
    ["Fogarty (NIH)", "https://www.fic.nih.gov/", "Global health research training."],
    ["TWAS", "https://twas.org/", "Science fellowships for the Global South."]
  ]},
  { c: "Data and statistics", i: [
    ["NBS", "https://www.nigerianstat.gov.ng/", "National Bureau of Statistics reports and datasets."],
    ["DHS Program", "https://dhsprogram.com/", "Nigeria Demographic and Health Surveys."],
    ["NCDC", "https://ncdc.gov.ng/", "Disease surveillance and outbreak reports."],
    ["World Bank Microdata", "https://microdata.worldbank.org/", "Household surveys including the GHS-Panel."]
  ]},
  { c: "Journals, indexing and access", i: [
    ["African Journals Online", "https://www.ajol.info/", "Large index of African peer-reviewed journals."],
    ["DOAJ", "https://doaj.org/", "Directory of vetted open access journals."],
    ["Research4Life", "https://www.research4life.org/", "Free or low-cost access for eligible institutions."],
    ["ORCID", "https://orcid.org/", "Persistent researcher identifier."],
    ["Think. Check. Submit.", "https://thinkchecksubmit.org/", "Checklist for choosing trusted journals."]
  ]},
  { c: "Registries and tools", i: [
    ["PROSPERO", "https://www.crd.york.ac.uk/prospero/", "Register systematic reviews."],
    ["PACTR", "https://pactr.samrc.ac.za/", "Pan African Clinical Trials Registry."],
    ["Open Science Framework", "https://osf.io/", "Preregistration and project hosting."],
    ["KoboToolbox", "https://www.kobotoolbox.org/", "Free offline data collection."],
    ["Rayyan", "https://www.rayyan.ai/", "Screening for reviews."],
    ["Zotero", "https://www.zotero.org/", "Free reference manager."]
  ]}
];
