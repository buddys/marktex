# text -> html test procedure


##############################################################
# variables
##############################################################

# parser and parser src

CC := ../bin/marktex.js
SRC := ../lib/marktex.js $(CC)


# text files

texts := $(shell ls *.text)
bases := $(basename $(texts))
htmls := $(addsuffix .html, $(bases))


# target files

default := $(addprefix default/, $(htmls))
gfm_off := $(addprefix gfm_off/, $(htmls))
breaks_off := $(addprefix breaks_off/, $(htmls))
marktex_off := $(addprefix marktex_off/, $(htmls))
smartlist_off := $(addprefix smartlist_off/, $(htmls))
smartquote_off := $(addprefix smartquote_off/, $(htmls))
align_off := $(addprefix align_off/, $(htmls))
tables_off := $(addprefix tables_off/, $(htmls))
todo_off := $(addprefix todo_off/, $(htmls))
sanitize_on := $(addprefix sanitize_on/, $(htmls))
all := $(default) $(gfm_off) $(breaks-off) $(marktex_off) $(smartlist_off)\
	$(smartquote_off) $(align_off) $(tables_off) $(todo_off) $(sanitize_on)

diffitems := $(addsuffix .diff,$(all))
lockeditems := $(addsuffix .locked,$(all))


################################################################
# chains
################################################################

# main chains

.PHONY: clean clean-diff clean-all $(diffitems) lock diff

main: diff

clean:
	-rm -f $(all)

clean-diff: 
	-rm -f *.diff */*.diff

clean-locked:
	-rm -f $(lockeditems)

clean-all: clean clean-diff



# diff chains

diff: clean-diff $(all) $(diffitems)
	head -n -0 */option.diff >> option.diff
	
$(diffitems): %.diff: %
	-if [ -f $<.locked ]; then diff -c $<.locked $< >> version.diff || printf '\n\n' >>version.diff; fi;\
		diff -c default/`basename $<` $< >> `dirname $<`/option.diff || printf '\n\n' >> `dirname $<`/option.diff



# lock chains

lock: $(lockeditems)

$(lockeditems): %.locked: %
	cp $< $<.locked



# test chains

$(default): default/%.html: %.text $(SRC)
	$(CC) -f $< -o $@

$(gfm_off): gfm_off/%.html: %.text $(SRC)
	$(CC) --gfm false -f $< -o $@

$(breaks_off): breaks_off/%.html: %.text $(SRC)
	$(CC) --breaks false -f $< -o $@

$(marktex_off): marktex_off/%.html: %.text $(SRC)
	$(CC) --marktex false -f $< -o $@

$(smartlist_off): smartlist_off/%.html: %.text $(SRC)
	$(CC) --smartlist false -f $< -o $@

$(smartquote_off): smartquote_off/%.html: %.text $(SRC)
	$(CC) --smartquote false -f $< -o $@

$(align_off): align_off/%.html: %.text $(SRC)
	$(CC) --align false -f $< -o $@

$(tables_off): tables_off/%.html: %.text $(SRC)
	$(CC) --tables false -f $< -o $@

$(todo_off): todo_off/%.html: %.text $(SRC)
	$(CC) --todo false -f $< -o $@

$(sanitize_on): sanitize_on/%.html: %.text $(SRC)
	$(CC) --sanitize true -f $< -o $@

